use std::fmt::{Debug, Display};

use actix_web::error::{ErrorBadRequest, ErrorForbidden, ErrorInternalServerError};


pub fn internal_server_error<T>(e: T) -> actix_web::Error 
where
    T: 'static + Display + Debug
{
    ErrorInternalServerError(e)
}

pub fn bad_request<T>(e: T) -> actix_web::Error 
where
    T: 'static + Display + Debug
{
    ErrorBadRequest(e)
}

pub fn forbidden<T>(e: T) -> actix_web::Error 
where
    T: 'static + Display + Debug
{
    ErrorForbidden(e)
}