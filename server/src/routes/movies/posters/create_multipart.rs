use actix_web::{HttpResponse, web};
use serde::Serialize;

use crate::{errors::internal_server_error, routes::movies::posters::PortraitInfo, s3::create_multipart::create_multipart_upload, startup::Bucket};

#[derive(Serialize)]
struct ResponsePayload {
    #[serde(rename = "uploadId")]
    upload_id: String
}
pub async fn create_multipart(
    client: web::Data<aws_sdk_s3::Client>,
    bucket: web::Data<Bucket>,
    info: web::Path<PortraitInfo>
) -> Result<HttpResponse, actix_web::Error> {

    let key = format!("movies/{}/portrait/{}",info.id, info.key);
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