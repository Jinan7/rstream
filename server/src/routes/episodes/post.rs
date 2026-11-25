use actix_web::{HttpResponse, web};
use chrono::NaiveDate;
use sqlx::PgPool;

use crate::errors::internal_server_error;

#[derive(Debug, serde::Deserialize)]
pub struct Episode {
    title: String,
    index: i32,
    season: uuid::Uuid,
    #[serde(rename = "releaseDate")]
    release_date: NaiveDate,
    duration: i32,
    summary: String,
}

#[derive(Debug, serde::Serialize)]
pub struct ResponsePayload {
    id: uuid::Uuid
}
pub async fn post(
    pool: web::Data<PgPool>,
    episode: web::Json<Episode>
) -> Result<HttpResponse, actix_web::Error> {

    let id = insert_episode(&pool, episode.0)
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

pub async fn insert_episode(
    pool: &PgPool,
    episode: Episode,
) -> Result<uuid::Uuid, sqlx::Error> {

    let id = uuid::Uuid::new_v4();
    sqlx::query!(
        r#"
            INSERT INTO episodes(
                id,
                title,
                index,
                season,
                duration,
                release_date,
                summary
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        "#,
        id,
        episode.title,
        episode.index,
        episode.season,
        episode.duration,
        episode.release_date,
        episode.summary,
    )
    .execute(pool)
    .await?;

    Ok(id)
}