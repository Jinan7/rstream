use actix_web::{HttpResponse, web};
use serde::Deserialize;
use sqlx::PgPool;
use tokio::task::spawn_blocking;

use crate::{authentication::hash_password, domain::User, errors::internal_server_error, session::TypedSession};

#[derive(Debug, Deserialize)]
pub struct RequestPayload {
    pub name: String,
    pub email: String,
    pub password: String,
}
pub async fn post(
    pool: web::Data<PgPool>,
    payload: web::Json<RequestPayload>,
    session: TypedSession
) -> Result<HttpResponse, actix_web::Error> {

    let password = payload.0.password;

    let password_hash = spawn_blocking(move || hash_password(password))
        .await
        .map_err(internal_server_error)?
        .map_err(internal_server_error)?;

    let user = User::new(
        payload.0.name,
        payload.0.email,
        password_hash,
    );

    let id = insert_user(&pool, user)
        .await
        .map_err(internal_server_error)?;

    session.renew();
    session.insert(id)
        .map_err(internal_server_error)?;

    Ok(HttpResponse::Ok().finish())
}

async fn insert_user(
    pool: &PgPool,
    user: User,
) -> Result<uuid::Uuid, sqlx::Error> {

    
    sqlx::query!(
        r#"
            INSERT INTO users(id, name, email, password)
            values ($1, $2, $3, $4)
        "#,
        user.id,
        user.name,
        user.email,
        user.password,
    )
    .execute(pool)
    .await?;

    Ok(user.id)
}