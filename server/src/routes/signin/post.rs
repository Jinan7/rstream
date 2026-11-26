use actix_web::{HttpResponse, web};
use serde::Deserialize;
use sqlx::PgPool;

use crate::{authentication::verify_credentials, domain::Credentials, errors::internal_server_error, session::TypedSession};

#[derive(Debug, Deserialize)]
pub struct RequestPayload {
    email: String,
    password: String,
}

pub async fn post(
    pool: web::Data<PgPool>,
    payload: web::Json<RequestPayload>,
    session: TypedSession,
) -> Result<HttpResponse, actix_web::Error> {

    
    let credentials = Credentials::new(payload.0.email, payload.0.password);

    match verify_credentials(&pool, credentials).await {

        Ok(id) => {
            session.renew();
            session.insert(id)
                .map_err(internal_server_error)?;
            return Ok(HttpResponse::Ok().finish())   
        } 
        Err(e) => {
            return Err(internal_server_error(e))
        }
    }
}