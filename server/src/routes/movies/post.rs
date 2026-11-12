use actix_web::{HttpResponse, web};
use chrono::{NaiveDate};
use serde::Serialize;
use sqlx::{PgPool};

use crate::errors::internal_server_error;

#[derive(serde::Deserialize, Debug)]
pub struct Movie {
    pub title: String,
    #[serde(rename = "releaseDate")]
    pub release_date: NaiveDate,
    pub duration: i32,
    #[serde(rename = "imdbRating")]
    pub imdb_rating: f64,
    pub genre: String,
    pub popularity: i32,
    pub directors: Vec<String>,
    pub writers: Vec<String>,
    pub stars: Vec<String>,
    pub summary: String

}

#[derive(Serialize)]
pub struct Response {
    id: uuid::Uuid
}

pub async fn post(
    movie: web::Json<Movie>,
    pool: web::Data<PgPool>
) -> Result<HttpResponse, actix_web::Error> {

    let genre_id = get_genre_id(&pool, &movie.genre)
        .await
        .map_err(internal_server_error)?;

    let id = insert_movie(&pool, movie.0, genre_id)
        .await
        .map_err(internal_server_error)?;

    
    let response = HttpResponse::Ok()
    .json(
        Response {
            id
        }
    );
    Ok(response)
}

async fn get_genre_id(
    pool: &PgPool,
    genre: &str,
) -> Result<uuid::Uuid, sqlx::Error> {

    let record = sqlx::query!(
        r#"
            SELECT id from genres
            WHERE genre = $1
        "#,
        genre
    )
    .fetch_one(pool)
    .await?;

    Ok(record.id)
}

async fn insert_movie(
    pool: &PgPool,
    movie: Movie,
    genre: uuid::Uuid,
) -> Result<uuid::Uuid, sqlx::Error> {

    let id = uuid::Uuid::now_v7();
    sqlx::query!(
        r#"INSERT INTO movies (
            id,
            title,
            release_date,
            duration,
            imdb_rating,
            genre,
            popularity,
            directors,
            writers,
            stars,
            summary
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)"#,
        id,
        movie.title,
        movie.release_date,
        movie.duration,
        movie.imdb_rating,
        genre,
        movie.popularity,
        &movie.directors,
        &movie.writers,
        &movie.stars,
        movie.summary,
    )
    .execute(pool)
    .await?;

    Ok(id)
}
