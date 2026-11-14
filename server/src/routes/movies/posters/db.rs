use sqlx::PgPool;

use crate::errors::{bad_request, internal_server_error};

pub async fn update_movie_image(
    pool: &PgPool,
    id: uuid::Uuid,
    url: &str,
    aspect: &str,
) -> Result<(), actix_web::Error>{
    let _ = match aspect {

        "portrait" => {
            update_movie_portrait(&pool, id, url)
                .await
                .map_err(internal_server_error)?;
        }
        "banner" => {
            update_movie_banner(&pool, id, url)
                .await
                .map_err(internal_server_error)?;

        }
         _ => {
            return Err(bad_request(anyhow::anyhow!("Invalid aspect query")))
         }
    };

    Ok(())
}

pub async fn update_movie_portrait(
    pool: &PgPool,
    id: uuid::Uuid,
    url: &str,
) -> Result<(), sqlx::Error> {

    sqlx::query!(
        r#"
            UPDATE movies
            SET portrait_url = $2
            WHERE id = $1
        "#,
        id,
        url

    )
    .execute(pool)
    .await?;

    Ok(())
}

pub async fn update_movie_banner(
    pool: &PgPool,
    id: uuid::Uuid,
    url: &str,
) -> Result<(), sqlx::Error> {

    sqlx::query!(
        r#"
            UPDATE movies
            SET banner_url = $2
            WHERE id = $1
        "#,
        id,
        url

    )
    .fetch_one(pool)
    .await?;

    Ok(())
}