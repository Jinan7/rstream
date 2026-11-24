use actix_web::{HttpResponse, web};
use chrono::NaiveDate;
use sqlx::{Executor, PgPool, Postgres, Row, Transaction};

use crate::errors::internal_server_error;

#[derive(serde::Deserialize, Debug)]
pub struct Series {
    pub id: Option<uuid::Uuid>,
    pub title: String,
    #[serde(rename = "releaseDate")]
    pub release_date: NaiveDate,
    pub duration: i32,
    #[serde(rename = "imdbRating")]
    pub imdb_rating: f64,
    pub genres: Vec<String>,
    pub popularity: i32,
    pub directors: Vec<String>,
    pub writers: Vec<String>,
    pub stars: Vec<String>,
    pub summary: String,
    pub portrait_url: Option<String>,
    pub banner_url: Option<String>
}

#[derive(serde::Serialize, Debug)]
struct ResponsePayload {
    id: uuid::Uuid
}

pub async fn post(
    pool: web::Data<PgPool>,
    series: web::Json<Series>
) -> Result<HttpResponse, actix_web::Error> {

    let mut transaction = pool.begin().await.map_err(internal_server_error)?;

    let series_id = insert_series(&mut transaction, &series).await.map_err(internal_server_error)?;
    insert_genres(series_id, &mut transaction, series.0).await.map_err(internal_server_error)?;
    transaction.commit().await.map_err(internal_server_error)?;

    let response = HttpResponse::Ok()
        .json(
            ResponsePayload {
                id: series_id
            }
        );

    Ok(response)
}

pub async fn insert_series(
    transaction: &mut Transaction<'_, Postgres>,
    series: &Series,
) -> Result<uuid::Uuid, sqlx::Error> {

    let id = uuid::Uuid::new_v4();
    let query = sqlx::query!(
        r#"
            INSERT INTO series(
                id,
                title,
                release_date,
                duration,
                imdb_rating,
                popularity,
                directors,
                writers,
                stars,
                summary,
                portrait_url,
                banner_url
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, '', '')
        "#,
        id,
        series.title,
        series.release_date,
        series.duration,
        series.imdb_rating,
        series.popularity,
        &series.directors,
        &series.writers,
        &series.stars,
        series.summary,
    );

    transaction.execute(query)
    .await?;

    Ok(id)
}

pub async fn insert_genres(
    series_id: uuid::Uuid,
    transaction: &mut Transaction<'_, Postgres>,
    series: Series
) -> Result<(), sqlx::Error> {

    
    for genre in series.genres {

        let genre_id = get_genre_id(genre, transaction).await?;
        insert_genre(genre_id, series_id, transaction).await?;
    }

    Ok(())
}

pub async fn get_genre_id(
    genre: String,
    transaction: &mut Transaction<'_, Postgres>
) -> Result<uuid::Uuid, sqlx::Error> {

    let query = sqlx::query!(
        r#"
            SELECT id FROM genres
            WHERE genre = $1
            LIMIT 1
        "#,
        genre
    );

    let record = transaction
    .fetch_one(query)
    .await?;

    let id = record.try_get("id")?;

    Ok(id)
}

pub async fn insert_genre(
    genre_id: uuid::Uuid,
    series_id: uuid::Uuid,
    transaction: &mut Transaction<'_, Postgres>
) -> Result<(), sqlx::Error> {

    let id = uuid::Uuid::new_v4();
    let query = sqlx::query!(
        r#"
            INSERT INTO series_genre_relation(
                id,
                series_id,
                genre_id
            ) VALUES ($1, $2, $3)
        "#,
        id,
        series_id,
        genre_id
    );

    transaction
        .execute(query)
        .await?;
    Ok(())
}

