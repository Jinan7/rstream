use actix_web::{HttpResponse, web};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;

use crate::errors::internal_server_error;

#[derive(Debug, Deserialize)]
pub struct Season {
    index: i32,
    series: uuid::Uuid
}

#[derive(Debug, Serialize)]
pub struct ResponsePayload {
    id: uuid::Uuid
}
pub async fn post(
    pool: web::Data<PgPool>,
    season: web::Json<Season>
) -> Result<HttpResponse, actix_web::Error> {
    
    let id = insert_season(&pool, season.0)
        .await
        .map_err(internal_server_error)?;

    let response = HttpResponse::Ok()
        .json(
            ResponsePayload {
                id
            }
        );

    Ok(response)
}

pub async fn insert_season(
    pool: &PgPool,
    season: Season,
) -> Result<uuid::Uuid,  sqlx::Error> {

    let id = uuid::Uuid::new_v4();

    sqlx::query!(
        r#"
            INSERT INTO seasons(
                id,
                index,
                series
            ) VALUES ($1, $2, $3)
        "#,
        id,
        season.index,
        season.series,
    )
    .execute(pool)
    .await?;

    Ok(id)
}