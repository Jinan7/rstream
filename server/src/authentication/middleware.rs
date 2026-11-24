use std::fmt::Display;

use actix_web::{FromRequest, HttpMessage, body::MessageBody, dev::{ServiceRequest, ServiceResponse}, middleware::Next};

use crate::{errors::forbidden, session::TypedSession};

#[derive(Debug)]
pub struct UserId(uuid::Uuid);

impl Display for UserId {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        self.0.fmt(f)
    }
}

pub async fn authentication_middle_ware(
    mut req: ServiceRequest,
    next: Next<impl MessageBody>
) -> Result<ServiceResponse<impl MessageBody>, actix_web::Error> {

    let session = async {
        let (req, payload) = req.parts_mut();
        TypedSession::from_request(req, payload).await
    }.await?;

    if let Some(user_id) = session.get_user()? {
        
        req.extensions_mut().insert(UserId (user_id));
        next.call(req).await
    } else {
        let e = anyhow::anyhow!("No session found");
        Err(forbidden(e))
    }

}