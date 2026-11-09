use actix_web::dev::Server;
use actix_web_server::configuration::{DatabaseSettings, get_configuration};
use actix_web_server::startup::Application;
use sqlx::{AssertSqlSafe, Connection, PgConnection, PgPool};

pub struct TestApp {
    pub address: String,
    pub pool: PgPool,
}

impl TestApp {

    pub fn route(&self, path: &str) -> String {
        format!("{}{}", self.address, path)
    }

    pub fn api_route(&self, path: &str) -> String {
        format!("{}/api/v1{}", self.address, path)
    }
}

pub async fn spawn_app() -> TestApp {
        
    let config = {
        let mut config = get_configuration().expect("failed to get configuration");
        config.database.database_name = uuid::Uuid::new_v4().to_string();
        config.application.port = 0;
        config
    };

    let pool = configure_database(&config.database).await;
    let app = Application::build(config).await;
    let address = format!("http://127.0.0.1:{}", app.port);
    
    tokio::spawn(app.server);

    TestApp {
        address,
        pool,
    }
}

async fn configure_database(config: &DatabaseSettings) -> PgPool {

    let mut connection = PgConnection::connect_with(&config.without_db())
        .await
        .expect("failed to connect to database");

    let query = format!(r#"CREATE DATABASE "{}";"#, config.database_name);
    dbg!(&query);

    sqlx::query(AssertSqlSafe(query))
        .execute(&mut connection)
        .await
        .expect("failed to create test database");

    let pool = PgPool::connect_with(config.with_db())
        .await
        .expect("failed to create database pool");

    sqlx::migrate!("./migrations")
        .run(&pool)
        .await
        .expect("failed to run migrations on test database");

    pool

}