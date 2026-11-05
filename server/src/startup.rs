use std::net::TcpListener;

use actix_web::{App, HttpServer, dev::Server, web};

use crate::{configuration::Settings, routes::healh_check};

pub struct Application {
    pub port: u16,
    pub server: Server
}

impl Application {
    pub fn build( config: Settings ) -> Self {

        let listener = TcpListener::bind(format!("{}:{}", config.application.host, config.application.port))
            .expect("failed to create tcp listener");

        let port = listener.local_addr()
            .expect("failed to get listener address")
            .port();

        let server = run(listener);

        Self {
            port,
            server,
        }
    }

    pub async fn run(self) {
        self.server.await.expect("failed to start server");
    }
}

pub fn run(listener: TcpListener ) -> Server {

    HttpServer::new(
        || {
            App::new()
                .route("/healh_check", web::get().to(healh_check))            
        }
    )
    .listen(listener)
    .expect("failed to bind listener to server")
    .run()

}