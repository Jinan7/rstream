use std::net::TcpListener;

use actix_session::{SessionMiddleware, storage::RedisSessionStore};
use actix_web::{App, HttpServer, cookie::Key, dev::Server, web};

use crate::{configuration::Settings, routes::healh_check};

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

        let server = run(listener, config.redis_uri).await;

        Self {
            port,
            server,
        }
    }

    pub async fn run(self) {
        self.server.await.expect("failed to start server");
    }
}

pub async fn run(listener: TcpListener, redis_uri: String ) -> Server {
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
                .route("/healh_check", web::get().to(healh_check))
                .service(
                    web::scope("/api/v1")
                         
                )         
        }
    )
    .listen(listener)
    .expect("failed to bind listener to server")
    .run()

}