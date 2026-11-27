use actix_web::{HttpResponse, web};
use serde::{Deserialize, Serialize};

use crate::{errors::{internal_server_error}, routes::videos::{PathInfo}, s3::{upload_part}, startup::{Bucket, PresignedExpiresIn}};

#[derive(Deserialize)]
pub struct RequestPayload {
    #[serde(rename = "uploadId")]
    pub upload_id: String,
    #[serde(rename = "partNumber")]
    pub part_number: i32,
}

#[derive(Serialize)]
struct ResponsePayload {
    #[serde(rename = "presignedUrl")]
    presigned_url: String
}
pub async fn upload_part_presigned(
    info: web::Path<PathInfo>,
    bucket: web::Data<Bucket>,
    client: web::Data<aws_sdk_s3::Client>,
    payload: web::Json<RequestPayload>,
    expires_in: web::Data<PresignedExpiresIn>
) -> Result<HttpResponse, actix_web::Error> {        
    
    let key = format!("videos/original/{}/{}",info.id,info.key);
    let presigned_url = upload_part::upload_part_presigned(&client, &bucket.0, &key, &payload.upload_id, payload.part_number, expires_in.0)
        .await
        .map_err(internal_server_error)?;

    let response = HttpResponse::Ok().json(
        ResponsePayload {
            presigned_url
        }
    );
    
    Ok(response)
}