use crate::helpers::spawn_app;

#[tokio::test]
async fn health_check() {

    let app = spawn_app().await;

    let route = app.route("/health_check");

    let response = reqwest::Client::new()
        .get(route)
        .send()
        .await
        .expect("failed to send request");

    assert_eq!(response.status().as_u16(), 200);
}