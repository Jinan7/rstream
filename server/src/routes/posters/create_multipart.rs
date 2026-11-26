use actix_web::{HttpResponse, web};
use serde::Serialize;

use crate::{errors::{bad_request, internal_server_error}, routes::posters::{PathInfo, QueryInfo}, s3::create_multipart::create_multipart_upload, startup::Bucket};

#[derive(Serialize)]
struct ResponsePayload {
    #[serde(rename = "uploadId")]
    upload_id: String
}
pub async fn create_multipart(
    query: web::Query<QueryInfo>,
    client: web::Data<aws_sdk_s3::Client>,
    bucket: web::Data<Bucket>,
    info: web::Path<PathInfo>
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

    let key = format!("{}/{}/{}/{}",tv, info.id,&aspect,info.key);
    let response = create_multipart_upload(&client, &bucket.0, &key)
        .await
        .map_err(internal_server_error)?;

    let upload_id = response.upload_id
        .ok_or(anyhow::anyhow!("no upload id"))
        .map_err(internal_server_error)?;

    let response = HttpResponse::Ok().json(
        ResponsePayload { upload_id }
    );

    Ok(response)
}