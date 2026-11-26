use std::str::FromStr;

use actix_web::{HttpResponse, web};
use sqlx::PgPool;

use crate::{errors::{bad_request, internal_server_error}, routes::posters::{PathInfo, QueryInfo, update_movie_image}, startup::CloudFrontDomain};

pub async fn complete_put(
    pool: web::Data<PgPool>,
    query: web::Query<QueryInfo>,
    info: web::Path<PathInfo>,
    cloudfront_domain: web::Data<CloudFrontDomain>
) -> Result<HttpResponse, actix_web::Error> {

    let tv = match query.0.tv {
        Some(s) if s == "movies" => s,
        Some(s) if s == "series" => s,
        Some(s) if s == "episodes" => s,
        _ => {
            let e = anyhow::anyhow!("tv not specified");
            return Err(bad_request(e))
        }
    };
    let aspect = match query.0.aspect {
        Some(s) if s == "portrait" => s,
        Some(s) if s == "banner" => s,
        
        _ => {
            let e = anyhow::anyhow!("tv not specified");
            return Err(bad_request(e))
        }
    };

    let key = format!("{}/{}/{}/{}",&tv,&info.id,&aspect,&info.key);
    

    let id = uuid::Uuid::from_str(&info.id)
        .map_err(internal_server_error)?;

    let url = format!("https://{}/{}", &cloudfront_domain.0, key);

    update_movie_image(&tv, &pool, id, &url, &aspect).await?;
    

    Ok(HttpResponse::Ok().finish())
}

