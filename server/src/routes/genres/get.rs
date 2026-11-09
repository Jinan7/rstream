use actix_web::{HttpResponse, web};
use sqlx::PgPool;

use crate::{domain::Genre, errors::internal_server_error};

pub async fn get(
    pool: web::Data<PgPool>
) -> Result<HttpResponse, actix_web::Error> {
    let genres = query_genres(&pool)
        .await
        .map_err(internal_server_error)?;

    let response = HttpResponse::Ok()
        .json(genres);

    Ok(response)
}

async fn query_genres(
    pool: &PgPool
) -> Result<Vec<Genre>, sqlx::Error>{

    let records = sqlx::query!(
        "SELECT * FROM genres"
    )
    .fetch_all(pool)
    .await?;

    let genres = records.
        into_iter().
        map(|r| {
            Genre {
                id: r.id,
                genre: r.genre
            }
        })
        .collect::<Vec<_>>();

    Ok(genres)
}