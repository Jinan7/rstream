use crate::helpers::spawn_app;

#[tokio::test]
pub async fn get_genres_returns_200() {

    let app = spawn_app().await;
    let route = app.api_route("/genres");

    let response = reqwest::Client::new()
        .get(route)
        .send()
        .await
        .expect("failed to send request");

    
    assert_eq!(response.status().as_u16(), 200);
}