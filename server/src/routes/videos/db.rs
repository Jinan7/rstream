use sqlx::PgPool;

pub async fn update_movie_video(
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
                    SET video_url = $2
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
                    SET video_url = $2
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