use std::net::TcpListener;
use actix_session::{SessionMiddleware, storage::RedisSessionStore};
use actix_web::{App, HttpServer, cookie::Key, dev::Server, middleware::from_fn, web};
use sqlx::PgPool;

use crate::{authentication::authentication_middle_ware, configuration::{CorsSettings, Settings}, routes::{auth_proxy, episodes, genres, health_check, movies, posters, seasons, series, signin, signout, signup, videos}, s3};

pub struct Application {
    pub port: u16,
    pub server: Server
}

pub struct Bucket(pub String);

pub struct CloudFrontDomain(pub String);

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
        let server = run(listener, pool, config.cors, config.redis_uri, config.s3.bucket, config.s3.presigned_expires_in, s3_client, config.cloudfront.domain).await;

        

        Self {
            port,
            server,
        }
    }

    pub async fn run(self) {
        self.server.await.expect("failed to start server");
    }
}

pub async fn run(listener: TcpListener, pool: PgPool, cors: CorsSettings, redis_uri: String, bucket: String, presigned_expires_in: u64, s3_client: aws_sdk_s3::Client, cloudfront_domain_name: String) -> Server {
   
    let s3_client = web::Data::new(s3_client);
    let pool = web::Data::new(pool);
    let bucket = web::Data::new(Bucket(bucket));
    let cloud_front_domain = web::Data::new(CloudFrontDomain(cloudfront_domain_name));
    let presigned_expires_in = web::Data::new(PresignedExpiresIn(presigned_expires_in));
    let session_key = Key::generate();
    let redis_store = RedisSessionStore::new(redis_uri )
        .await
        .expect("Failed to create redis session store");

    HttpServer::new(
        move || {

            App::new()
                .wrap(
                    SessionMiddleware::new(
                        redis_store.clone(),
                        session_key.clone(),
                    )
                )
                .wrap(cors.clone().cors_from_settings())
                .route("/health_check", web::get().to(health_check))
                .service(
                    web::scope("/api/v1")
                        .route("/signup", web::post().to(signup::post))
                        .route("/signin", web::post().to(signin::post))
                        .service(
                            web::scope("")
                            .wrap(from_fn(authentication_middle_ware))
                            .route("/auth_proxy", web::get().to(auth_proxy::get))
                            .route("/signout", web::get().to(signout::get))
                            .route("/genres", web::get().to(genres::get))
                            .route("/movies", web::post().to(movies::post))
                            .route("/movies", web::get().to(movies::get))
                            .route("/series", web::post().to(series::post))
                            .route("/seasons", web::post().to(seasons::post))
                            .route("/episodes", web::post().to(episodes::post))
                            .route("/posters/multipart/{id}/{key}", web::get().to(posters::create_multipart))
                            .route("/posters/multipart/{id}/{key}", web::post().to(posters::upload_part_presigned))
                            .route("/posters/{id}/{key}",web::get().to(posters::get_presigned_url))
                            .route("/posters/complete_multipart/{id}/{key}", web::post().to(posters::complete_multipart))
                            .route("/posters/complete/{id}/{key}", web::get().to(posters::complete_put))
                            .route("/videos/multipart/{id}/{key}", web::get().to(videos::create_multipart))
                            .route("/videos/multipart/{id}/{key}", web::post().to(videos::upload_part_presigned))
                            .route("/videos/{id}/{key}",web::get().to(videos::get_presigned_url))
                            .route("/videos/complete_multipart/{id}/{key}", web::post().to(videos::complete_multipart))
                            .route("/videos/complete/{id}/{key}", web::get().to(videos::complete_put))
                        )
                        
                         
                )  
                .app_data(pool.clone()) 
                .app_data(bucket.clone())  
                .app_data(presigned_expires_in.clone())  
                .app_data(s3_client.clone())  
                .app_data(cloud_front_domain.clone())
        }
    )
    .listen(listener)
    .expect("failed to bind listener to server")
    .run()

}