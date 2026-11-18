use actix_web::{HttpResponse, web};
use aws_sdk_s3::types::Protocol::Http;
use chrono::NaiveDate;
use serde::Serialize;
use sqlx::PgPool;

use crate::errors::internal_server_error;



#[derive(serde::Serialize, Debug)]
pub struct Movie {
    pub id: uuid::Uuid,
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
    pub summary: String,
    #[serde(rename = "portraitUrl")]
    pub portrait_url: String,
    #[serde(rename = "bannerUrl")]
    pub banner_url: String
}

#[derive(Serialize)]
pub struct ResponsePayload {
    movies: Vec<Movie>
}
    


pub async fn get(
    pool: web::Data<PgPool>
) -> Result<HttpResponse, actix_web::Error> {
    
    let movies = select_all_movies(&pool)
        .await
        .map_err(internal_server_error)?;

    let response = HttpResponse::Ok()
        .json(ResponsePayload {
            movies
        });
    Ok(response)
}


async fn select_all_movies(
    pool: &PgPool,
) -> Result<Vec<Movie>, sqlx::Error> {

    let records = sqlx::query!(
        r#"
            SELECT 
                movies.id,
                title,
                duration,
                release_date,
                genres.genre,
                directors,
                writers,
                stars,
                imdb_rating,
                popularity,
                portrait_url,
                banner_url,
                summary
             FROM movies
            JOIN genres
            ON movies.genre = genres.id
        "#
    )
    .fetch_all(pool)
    .await?;
    
    

    let movies = records
        .into_iter()
        .map(|r| {
            
            Movie {
                id: r.id,
                title: r.title,
                duration: r.duration,
                release_date: r.release_date,
                genre: r.genre,
                directors: r.directors,
                writers: r.writers,
                stars: r.stars,
                imdb_rating: r.imdb_rating,
                popularity: r.popularity,
                portrait_url: r.portrait_url,
                banner_url: r.banner_url,
                summary: r.summary
            }
        })
        .collect::<Vec<Movie>>();

    Ok(movies)
}