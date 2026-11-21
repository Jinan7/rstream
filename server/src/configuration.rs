use actix_cors::Cors;
use serde::Deserialize;
use sqlx::postgres::{PgConnectOptions, PgSslMode};


#[derive(serde::Deserialize, Clone, Debug)]

pub struct Settings {
    pub database: DatabaseSettings,
    pub application: ApplicationSettings,
    pub cors: CorsSettings,
    pub redis_uri: String,
    pub s3: S3Settings,
    pub cloudfront: CloudfrontSettings,
}


#[derive(serde::Deserialize, Clone, Debug)]
pub struct DatabaseSettings {
    pub username: String,
    pub password: String,
    pub port: u16,
    pub host: String,
    pub database_name: String,
    pub require_ssl: bool,
}

#[derive(serde::Deserialize, Clone, Debug)]
pub struct ApplicationSettings {
    pub port: u16,
    pub host: String,
    pub hmac_secret: String
}

#[derive(serde::Deserialize, Clone, Debug)]
pub struct S3Settings {
    pub bucket: String,
    pub presigned_expires_in: u64,
}

#[derive(serde::Deserialize, Clone, Debug)]
pub struct CloudfrontSettings {
    pub domain: String
}

#[derive(Debug, Clone, Deserialize)]
#[serde(untagged)]
pub enum OneOrMany {
    One(String),
    Many(Vec<String>)
}
#[derive(Debug, Clone, Deserialize)]
pub struct CorsSettings {
    origins: Option<OneOrMany>,
    methods: Option<OneOrMany>,
    headers: Option<OneOrMany>,
    #[serde(rename = "expose-headers")]
    expose_headers: Option<OneOrMany>,
    credentials: bool,
    #[serde(rename = "send-wildcard")]
    send_wildcard: bool,
    max_age: Option<usize>,
    #[serde(rename = "block-on-origin-mismatch")]
    block_on_origin_mismatch: bool,
} 

impl CorsSettings {

    pub fn cors_from_settings(&self) -> Cors {

        let mut cors = Cors::default();

        match self.origins.as_ref() {
            None => {}
            Some(OneOrMany::One(origin)) if origin == "*" => {
                cors = cors.allow_any_origin();
            }
            Some(OneOrMany::One(origin)) => {
                cors = cors.allowed_origin(origin);
            }
            Some(OneOrMany::Many(origins)) => {
                for origin in origins {
                    cors = cors.allowed_origin(origin);
                }
            }
        }

        match self.methods.as_ref() {
            None => {}
            Some(OneOrMany::One(method)) if method == "*" => {
                cors = cors.allow_any_method();
            }
            Some(OneOrMany::One(method)) => {
                cors = cors.allowed_methods([method.as_str()]);
            }
            Some(OneOrMany::Many(methods)) => {
                cors = cors.allowed_methods(methods.iter().map(String::as_str));
            }
        }

        match self.headers.as_ref() {
            None => {}
            Some(OneOrMany::One(header)) if header == "*" => {
                cors = cors.allow_any_header();
            }
            Some(OneOrMany::One(header)) => {
                cors = cors.allowed_header(header.as_str());
            }
            Some(OneOrMany::Many(headers)) => {
                cors = cors.allowed_headers(headers.iter().map(String::as_str));
            }
        }

        match self.expose_headers.as_ref() {
            None => {}
            Some(OneOrMany::One(header)) if header == "*" => {
                cors = cors.expose_any_header();
            }
            Some(OneOrMany::One(header)) => {
                cors = cors.expose_headers([header.as_str()]);
            }
            Some(OneOrMany::Many(headers)) => {
                cors = cors.expose_headers(headers.iter().map(String::as_str));
            }
        }

        if self.credentials {
            cors = cors.supports_credentials();
        }

        if self.send_wildcard {
            cors = cors.send_wildcard()
        }

        if let Some(max_age) = self.max_age {
            cors = cors.max_age(max_age);
        }

        cors.block_on_origin_mismatch(self.block_on_origin_mismatch)
    }
}

pub fn get_configuration() -> Result<Settings, config::ConfigError> {

    let base_path = std::env::current_dir()
    .expect("Failed to determine the current directory");

    let configuration_directory = base_path.join("configuration");


    let environment: Environment = std::env::var("APP_ENVIRONMENT")
    .unwrap_or_else(|_| "local".into())
    .try_into()
    .expect("Failed to parse APP_ENVIRONMENT");

   

    let environment_filename = format!("{}.yaml", environment.as_str());
    let settings = config::Config::builder()
    .add_source(
        config::File::from(config::File::from(configuration_directory.join("base.yaml")))
    )
    .add_source(
        config::File::from(configuration_directory.join(environment_filename))
    )
    .build()?;

    settings.try_deserialize::<Settings>()
}

pub enum Environment {
    Local,
    Production
}

impl Environment {
    pub fn as_str(&self) -> &'static str {

        match self {
            Environment::Local => "local",
            Environment::Production => "production"
        }
    }
}

impl TryFrom<String> for Environment {
    type Error = String;

    fn try_from(s: String) -> Result<Self, Self::Error> {
        match s.to_lowercase().as_str() {
            "local" => Ok(Self::Local),
            "production" => Ok(Self::Production),
            other => Err(format!(
                "{} is not a supported environment. \
                Use either `local` or `production`.",
                other
            ))
        }
    }
}
impl DatabaseSettings {

    pub fn without_db(&self) -> PgConnectOptions {

        let ssl_mode = if self.require_ssl {
            PgSslMode::Require
        } else {
            PgSslMode::Prefer
        };
        PgConnectOptions::new()
        .host(&self.host)
        .username(&self.username)
        .password(&self.password)
        .port(self.port)
        .ssl_mode(ssl_mode)
            
    }

    pub fn with_db(&self) -> PgConnectOptions {
        self.without_db().database(&self.database_name)
    }
}