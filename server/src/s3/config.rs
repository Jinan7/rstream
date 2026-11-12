use aws_config::{BehaviorVersion, SdkConfig};

pub async fn config() -> SdkConfig {
    aws_config::load_defaults(BehaviorVersion::latest()).await
}