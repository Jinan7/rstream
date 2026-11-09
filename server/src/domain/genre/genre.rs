use serde::Serialize;

#[derive(Serialize)]
pub struct Genre{
    pub id: uuid::Uuid,
    pub genre: String,
}