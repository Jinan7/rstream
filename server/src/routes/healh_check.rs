use actix_web::HttpResponse;

pub async fn healh_check() -> HttpResponse {
    HttpResponse::Ok().finish()
}