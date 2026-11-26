use serde::Deserialize;

#[derive(Deserialize)]
pub struct PathInfo {
    pub id: String,
    pub key: String,
}

#[derive(Deserialize, Debug)]
pub struct QueryInfo {
    pub aspect: Option<String>,
    pub tv: Option<String>
}