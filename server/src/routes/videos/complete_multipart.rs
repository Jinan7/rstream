use std::str::FromStr;

use actix_web::{HttpResponse, web};
use aws_sdk_s3::{types::{CompletedMultipartUpload, CompletedPart}};
use serde::{Deserialize};
use sqlx::PgPool;

use crate::{errors::{bad_request, internal_server_error}, routes::videos::{PathInfo, QueryInfo, update_movie_video}, s3::complete_multipart::complete_multipart_upload, startup::{Bucket, CloudFrontDomain}};


#[derive(Deserialize)]
pub struct RequestPayload {
    #[serde(rename = "uploadId")]
    pub upload_id: String,
    pub parts: Vec<Part>,
}

#[derive(Deserialize)]
pub struct Part {
    #[serde(rename = "partNumber")]
    pub part_number: i32,
    pub etag: String,
}
pub async fn complete_multipart(
    pool: web::Data<PgPool>,
    client: web::Data<aws_sdk_s3::Client>,
    bucket: web::Data<Bucket>,
    info: web::Path<PathInfo>,
    query: web::Query<QueryInfo>,
    payload: web::Json<RequestPayload>,
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
   

    let key = format!("videos/original/{}/{}",info.id,info.key);
    
    

    let parts = payload.parts.iter()
        .map(|part| {
            CompletedPart::builder()
                .e_tag(&part.etag)
                .part_number(part.part_number)
                .build()
        })
        .collect::<Vec<CompletedPart>>();


    let completed_parts = CompletedMultipartUpload::builder()
        .set_parts(Some(parts))
        .build();

    let _response = complete_multipart_upload(&client, &bucket.0, &key, &payload.upload_id, completed_parts)
        .await
        .map_err(internal_server_error)?;

    let id = uuid::Uuid::from_str(&info.id)
        .map_err(internal_server_error)?;

    
    let url = format!("https://{}/{}", &cloudfront_domain.0, key);

    update_movie_video(&tv, &pool, id, &url).await.map_err(internal_server_error)?;

    Ok(HttpResponse::Ok().finish())
}



