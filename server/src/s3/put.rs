use std::time::Duration;

use aws_sdk_s3::presigning::PresigningConfig;

pub async fn put_presigned(
    client: &aws_sdk_s3::Client,
    bucket: &str,
    key: &str,
    expires_in: u64,
) -> Result<String, anyhow::Error> {

    let config = PresigningConfig::builder()
        .expires_in(Duration::from_secs(expires_in))
        .build()?;

    let response = client
        .put_object()
        .bucket(bucket)
        .key(key)
        .presigned(config)
        .await?;

    Ok(response.uri().into())
}