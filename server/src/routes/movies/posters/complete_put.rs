use std::str::FromStr;

use actix_web::{HttpResponse, web};
use sqlx::PgPool;

use crate::{errors::{internal_server_error}, routes::movies::posters::{PathInfo, QueryInfo, update_movie_image}, startup::CloudFrontDomain};

pub async fn complete_put(
    pool: web::Data<PgPool>,
    query: web::Query<QueryInfo>,
    info: web::Path<PathInfo>,
    cloudfront_domain: web::Data<CloudFrontDomain>
) -> Result<HttpResponse, actix_web::Error> {

    let key = format!("movies/{}/portrait/{}",&info.id, &info.key);
    
    let aspect = &query.aspect;

    println!("{aspect}");
    let id = uuid::Uuid::from_str(&info.id)
        .map_err(internal_server_error)?;

    let url = format!("https://{}/{}", &cloudfront_domain.0, key);

    update_movie_image(&pool, id, &url, aspect).await?;
    

    Ok(HttpResponse::Ok().finish())
}

