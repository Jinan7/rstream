use actix_web::HttpResponse;

use crate::session::TypedSession;

pub async fn get(
    session: TypedSession
) -> Result<HttpResponse, actix_web::Error> {

    session.logout();

    Ok(HttpResponse::Ok().finish())
}