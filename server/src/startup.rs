use std::net::TcpListener;

use actix_cors::Cors;
use actix_session::{SessionMiddleware, storage::RedisSessionStore};
use actix_web::{App, HttpServer, cookie::Key, dev::Server, http::header, middleware::from_fn, web};
use sqlx::PgPool;

use crate::{authentication::authentication_middle_ware, configuration::Settings, routes::{genres, health_check, movies::{self, posters::{complete_multipart, create_multipart, get_presigned_url, upload_part_presigned}}}, s3};

pub struct Application {
    pub port: u16,
    pub server: Server
}

pub struct Bucket(pub String);


pub struct PresignedExpiresIn(pub u64);
impl Application {
    pub async fn build( config: Settings ) -> Self {

        let listener = TcpListener::bind(format!("{}:{}", config.application.host, config.application.port))
            .expect("failed to create tcp listener");

        let port = listener.local_addr()
            .expect("failed to get listener address")
            .port();

        let pool = PgPool::connect_lazy_with(config.database.with_db());

        let s3_config = s3::config::config().await;
        let s3_client = aws_sdk_s3::Client::new(&s3_config);
        let server = run(listener, pool, config.redis_uri, config.s3.bucket, config.s3.presigned_expires_in, s3_client).await;

        

        Self {
            port,
            server,
        }
    }

    pub async fn run(self) {
        self.server.await.expect("failed to start server");
    }
}

pub async fn run(listener: TcpListener, pool: PgPool, redis_uri: String, bucket: String, presigned_expires_in: u64, s3_client: aws_sdk_s3::Client) -> Server {
    let s3_client = web::Data::new(s3_client);
    let pool = web::Data::new(pool);
    let bucket = web::Data::new(Bucket(bucket));
    let presigned_expires_in = web::Data::new(PresignedExpiresIn(presigned_expires_in));
    let session_key = Key::generate();
    let redis_store = RedisSessionStore::new(redis_uri )
        .await
        .expect("Failed to create redis session store");
    HttpServer::new(
        move || {

            let cors = Cors::default()
                .allowed_origin("http://localhost:3000")
                .allowed_methods(vec!["GET", "POST"])
                .allowed_headers(vec![header::AUTHORIZATION, header::CONTENT_TYPE])
                .max_age(3600);

            App::new()
                .wrap(
                    SessionMiddleware::new(
                        redis_store.clone(),
                        session_key.clone(),
                    )
                )
                .wrap(cors)
                .route("/health_check", web::get().to(health_check))
                .service(
                    web::scope("/api/v1")
                        .route("/genres", web::get().to(genres::get))
                        .route("/movies", web::post().to(movies::post))
                        .route("/movies/posters/multipart/{id}/{key}", web::get().to(create_multipart))
                        .route("/movies/posters/multipart/{id}/{key}", web::post().to(upload_part_presigned))
                        .route("/movies/posters/{id}/{key}",web::get().to(get_presigned_url))
                        .route("/movies/posters/complete_multipart/{id}/{key}", web::post().to(complete_multipart))
                         
                )  
                .app_data(pool.clone()) 
                .app_data(bucket.clone())  
                .app_data(presigned_expires_in.clone())  
                .app_data(s3_client.clone())  
        }
    )
    .listen(listener)
    .expect("failed to bind listener to server")
    .run()

}