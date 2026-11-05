use actix_web_server::{configuration::get_configuration, startup::Application};

#[tokio::main]
async fn main() {
    
    let config = get_configuration()
        .expect("failed to get server settings ");
    let app = Application::build(config);

    app.run().await
}
