use actix_web::{HttpResponse, web};
use aws_sdk_s3::{operation::complete_multipart_upload::CompleteMultipartUpload, types::{CompletedMultipartUpload, CompletedPart}};
use serde::{Deserialize, Serialize};

use crate::{errors::internal_server_error, routes::movies::posters::PortraitInfo, s3::{complete_multipart::complete_multipart_upload, create_multipart::create_multipart_upload}, startup::Bucket};


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
    client: web::Data<aws_sdk_s3::Client>,
    bucket: web::Data<Bucket>,
    info: web::Path<PortraitInfo>,
    payload: web::Json<RequestPayload>
) -> Result<HttpResponse, actix_web::Error> {

    let key = format!("movies/{}/portrait/{}",info.id, info.key);
    

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

    let response = complete_multipart_upload(&client, &bucket.0, &key, &payload.upload_id, completed_parts)
        .await
        .map_err(internal_server_error)?;


    Ok(HttpResponse::Ok().finish())
}