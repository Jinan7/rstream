use std::str::FromStr;

use actix_web::{HttpResponse, web};
use sqlx::PgPool;

use crate::{errors::{bad_request, internal_server_error}, routes::videos::{PathInfo, QueryInfo, update_movie_video}, startup::CloudFrontDomain};

pub async fn complete_put(
    pool: web::Data<PgPool>,
    query: web::Query<QueryInfo>,
    info: web::Path<PathInfo>,
    cloudfront_domain: web::Data<CloudFrontDomain>
) -> Result<HttpResponse, actix_web::Error> {

    let tv = match query.0.tv {
        Some(s) if s == "movies" => s,
        Some(s) if s == "episodes" => s,
        _ => {
            let e = anyhow::anyhow!("tv not specified");
            return Err(bad_request(e))
        }
    };
    
    let key = format!("videos/original/{}/{}",info.id,info.key);
    
    let id = uuid::Uuid::from_str(&info.id)
        .map_err(bad_request)?;

    let url = format!("https://{}/{}", &cloudfront_domain.0, key);

    update_movie_video(&tv, &pool, id, &url).await.map_err(internal_server_error)?;
    

    Ok(HttpResponse::Ok().finish())
}

