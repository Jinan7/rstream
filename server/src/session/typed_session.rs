use std::process::Output;

use actix_session::{Session, SessionExt};
use actix_web::FromRequest;
use sqlx::{Type, types::uuid};


pub struct TypedSession(Session);

impl TypedSession {
    const USER_ID: &'static str = "user_id";

    fn insert(&self, id: uuid::Uuid ) {
        self.0.insert(Self::USER_ID, id);
    }

    fn get_user(&self) -> Option<uuid::Uuid> {
        self.0.get(Self::USER_ID).unwrap()
    }

    fn purge(self) {
        self.0.purge();
    }
}

impl FromRequest for TypedSession {

    type Error = <TypedSession as FromRequest>::Error;
    type Future = Future<Output = Result<Self, Self::Error>>;
    fn from_request(req: &actix_web::HttpRequest, payload: &mut actix_web::dev::Payload) -> Self::Future {
        
        Box::pin(async move {
            Self(req.get_session())
        })
    }
}