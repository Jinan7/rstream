use actix_web::{HttpResponse, web};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;

use crate::{errors::internal_server_error, s3::put::put_presigned, startup::{Bucket, PresignedExpiresIn}};

#[derive(Deserialize)]
pub struct PortraitInfo {
    pub id: String,
    pub key: String,
}

#[derive(Serialize)]
pub struct ResponsePayload {
    pub presigned_url: String,
}
pub async fn get_presigned_url(
    info: web::Path<PortraitInfo>,
    pool: web::Data<PgPool>,
    client: web::Data<aws_sdk_s3::Client>,
    bucket: web::Data<Bucket>,
    presigned_expires_in: web::Data<PresignedExpiresIn>
) -> Result<HttpResponse, actix_web::Error>{

    let key = format!("movies/{}/portrait/{}",info.id, info.key);
    let presigned_url = put_presigned(&client, &bucket.0, &key, presigned_expires_in.0)
        .await
        .map_err(internal_server_error)?;

    let response = HttpResponse::Ok().json(
        ResponsePayload {presigned_url}
    );

    Ok(response)
}