use serde::Deserialize;

#[derive(Deserialize)]
pub struct PortraitInfo {
    pub id: String,
    pub key: String,
}