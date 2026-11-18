use actix_web::{HttpResponse, web};
use chrono::{NaiveDate};
use serde::Serialize;
use sqlx::{Executor, PgPool, Postgres, Row, Transaction};

use crate::errors::internal_server_error;

#[derive(serde::Deserialize, Debug)]
pub struct Movie {
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

#[derive(Serialize)]
pub struct Response {
    id: uuid::Uuid
}

pub async fn post(
    movie: web::Json<Movie>,
    pool: web::Data<PgPool>
) -> Result<HttpResponse, actix_web::Error> {

    let mut transaction = pool
        .begin()
        .await
        .map_err(internal_server_error)?;

    let id = insert_movie(&mut transaction, &movie.0)
        .await
        .map_err(internal_server_error)?;

    
    insert_genres(&mut transaction, id, movie.0.genres)
        .await
        .map_err(internal_server_error)?;

    transaction
        .commit()
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
    transaction: &mut Transaction<'_, Postgres>,
    genre: &str,
) -> Result<uuid::Uuid, sqlx::Error> {

    let query = sqlx::query!(
        r#"
            SELECT id from genres
            WHERE genre = $1
        "#,
        genre
    );

    let record = transaction
        .fetch_one(query)
        .await?;

    let id: uuid::Uuid = record.try_get("id")?;
    Ok(id)
}

async fn insert_movie(
    transaction: &mut Transaction<'_, Postgres>,
    movie: &Movie,
) -> Result<uuid::Uuid, sqlx::Error> {

    let id = uuid::Uuid::now_v7();
    let query = sqlx::query!(
        r#"INSERT INTO movies (
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
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, '', '')"#,
        id,
        movie.title,
        movie.release_date,
        movie.duration,
        movie.imdb_rating,
        movie.popularity,
        &movie.directors,
        &movie.writers,
        &movie.stars,
        movie.summary,
    );

    transaction
        .execute(query)
        .await?;

    Ok(id)
}

async fn insert_genres(
    transaction: &mut Transaction<'_, Postgres>,
    movie_id: uuid::Uuid,
    genres: Vec<String>
) -> Result<(), sqlx::Error> {

    
    for genre in genres {
        let id = uuid::Uuid::now_v7();
        let genre_id = get_genre_id(transaction, &genre)
        .await?;

        let query = sqlx::query!(
            r#"
                INSERT INTO movie_genre_relation(
                    id,
                    movie_id,
                    genre_id
                )
                VALUES ($1, $2, $3)
            "#,

            id,
            movie_id,
            genre_id,
        );

        transaction
            .execute(query)
            .await?;
    }

    Ok(())
}