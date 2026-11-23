use actix_web::HttpResponse;

pub async fn get() -> Result<HttpResponse, actix_web::Error> {
    Ok(HttpResponse::Ok().finish())
}