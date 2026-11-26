use sqlx::PgPool;

use crate::errors::{bad_request, internal_server_error};

pub async fn update_movie_image(
    tv: &str,
    pool: &PgPool,
    id: uuid::Uuid,
    url: &str,
    aspect: &str,
) -> Result<(), actix_web::Error>{
    let _ = match aspect {

        "portrait" => {
            update_movie_portrait(tv, &pool, id, url)
                .await
                .map_err(internal_server_error)?;
        }
        "banner" => {
            update_movie_banner(tv, &pool, id, url)
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
    tv: &str,
    pool: &PgPool,
    id: uuid::Uuid,
    url: &str,
) -> Result<(), sqlx::Error> {

    let query = match tv {
        "movies" => {
            sqlx::query!(
                r#"
                    UPDATE movies
                    SET portrait_url = $2
                    WHERE id = $1
                "#,
                id,
                url

            )
        }
        "series" => {
            sqlx::query!(
                r#"
                    UPDATE series
                    SET portrait_url = $2
                    WHERE id = $1
                "#,
                id,
                url

            )
        }
        "episodes" => {
            sqlx::query!(
                r#"
                    UPDATE episodes
                    SET portrait_url = $2
                    WHERE id = $1
                "#,
                id,
                url

            )
        }
        _ => {
            return Err(sqlx::Error::InvalidArgument("some".into()))
        }
    };

    query
    .execute(pool)
    .await?;

    Ok(())
}

pub async fn update_movie_banner(
    tv: &str,
    pool: &PgPool,
    id: uuid::Uuid,
    url: &str,
) -> Result<(), sqlx::Error> {

    let query = match tv {
        "movies" => {
            sqlx::query!(
                r#"
                    UPDATE movies
                    SET banner_url = $2
                    WHERE id = $1
                "#,
                id,
                url

            )
        }
        "series" => {
            sqlx::query!(
                r#"
                    UPDATE series
                    SET banner_url = $2
                    WHERE id = $1
                "#,
                id,
                url

            )
        }
        "episodes" => {
            sqlx::query!(
                r#"
                    UPDATE episodes
                    SET banner_url = $2
                    WHERE id = $1
                "#,
                id,
                url

            )
        }
        _ => {
            return Err(sqlx::Error::InvalidArgument("some".into()))
        }
    };

    query
    .execute(pool)
    .await?;

    Ok(())
}