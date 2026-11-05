use std::future::{Ready, ready};
use actix_session::{Session, SessionExt, SessionGetError, SessionInsertError};
use actix_web::FromRequest;



pub struct TypedSession(Session);

impl TypedSession {
    const USER_ID: &'static str = "user_id";

    pub fn renew(&self) {
        self.0.renew();
    }
    pub fn insert(&self, id: uuid::Uuid ) -> Result<(), SessionInsertError> {
        self.0.insert(Self::USER_ID, id)
    }

    pub fn get_user(&self) -> Result<Option<uuid::Uuid>, SessionGetError> {
        self.0.get(Self::USER_ID)
    }

    pub fn logout(self) {
        self.0.purge();
    }
}

impl FromRequest for TypedSession {

    type Error = <Session as FromRequest>::Error;
    type Future = Ready<Result<Self, Self::Error>>;
    fn from_request(req: &actix_web::HttpRequest, _payload: &mut actix_web::dev::Payload) -> Self::Future {
        
        ready(Ok(Self(req.get_session())))
        
    }
}