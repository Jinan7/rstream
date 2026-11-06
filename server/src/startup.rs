use std::net::TcpListener;

use actix_session::{SessionMiddleware, storage::RedisSessionStore};
use actix_web::{App, HttpServer, cookie::Key, dev::Server, middleware::from_fn, web};
use sqlx::PgPool;

use crate::{authentication::authentication_middle_ware, configuration::Settings, routes::{genres, health_check}};

pub struct Application {
    pub port: u16,
    pub server: Server
}

impl Application {
    pub async fn build( config: Settings ) -> Self {

        let listener = TcpListener::bind(format!("{}:{}", config.application.host, config.application.port))
            .expect("failed to create tcp listener");

        let port = listener.local_addr()
            .expect("failed to get listener address")
            .port();

        let pool = PgPool::connect_lazy_with(config.database.with_db());

        let server = run(listener, pool, config.redis_uri).await;

        

        Self {
            port,
            server,
        }
    }

    pub async fn run(self) {
        self.server.await.expect("failed to start server");
    }
}

pub async fn run(listener: TcpListener, pool: PgPool, redis_uri: String ) -> Server {
    let pool = web::Data::new(pool);
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
                .route("/health_check", web::get().to(health_check))
                .service(
                    web::scope("/api/v1")
                        .route("/genres", web::get().to(genres::get))
                         
                )  
                .app_data(pool.clone())       
        }
    )
    .listen(listener)
    .expect("failed to bind listener to server")
    .run()

}