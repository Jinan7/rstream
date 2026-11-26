use actix_web::{HttpResponse, web};
use serde::{Serialize};

use crate::{errors::{bad_request, internal_server_error}, routes::posters::{PathInfo, QueryInfo}, s3::put::put_presigned, startup::{Bucket, PresignedExpiresIn}};



#[derive(Serialize)]
pub struct ResponsePayload {
    #[serde(rename = "presignedUrl")]
    pub presigned_url: String,
}
pub async fn get_presigned_url(
    query: web::Query<QueryInfo>,
    info: web::Path<PathInfo>,
    client: web::Data<aws_sdk_s3::Client>,
    bucket: web::Data<Bucket>,
    presigned_expires_in: web::Data<PresignedExpiresIn>
) -> Result<HttpResponse, actix_web::Error>{

   

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

    let key = format!("{}/{}/{}/{}",tv,info.id,aspect,info.key);
    let presigned_url = put_presigned(&client, &bucket.0, &key, presigned_expires_in.0)
        .await
        .map_err(internal_server_error)?;

    let response = HttpResponse::Ok().json(
        ResponsePayload {presigned_url}
    );

    Ok(response)
}