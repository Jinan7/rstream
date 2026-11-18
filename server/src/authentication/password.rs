use argon2::{Algorithm, Argon2, Params, PasswordHasher, PasswordVerifier, Version, password_hash::{self, phc::SaltString}};
use sqlx::PgPool;
use tokio::task::spawn_blocking;

use crate::domain::Credentials;


pub async fn verify_credentials(
    pool: &PgPool,
    credentials: Credentials
) -> Result<uuid::Uuid, anyhow::Error>{

    let mut id: Option<uuid::Uuid> = None;
    let mut password_hash = "$argon2id$v=19$m=15000,t=2,p=1$\
        gZiV/M1gPc22ElAH/Jh1Hw$\
        CWOrkoo7oJBQ/iyh7uJ0LO2aLEfrHwTWllSAxT0zRno".to_string();

    if let Some((user_id, password)) = get_user_with_credentials(pool, &credentials.email).await? {
        id = Some(user_id);
        password_hash = password;
    }

    spawn_blocking(|| verify_password_hash(credentials.password, password_hash))
        .await??;

    
    id.ok_or_else(|| anyhow::anyhow!("unauthorized"))
}

pub fn verify_password_hash(
    password: String,
    password_hash: String
) -> Result<(), password_hash::Error>{

    Argon2::default()
        .verify_password(password.as_bytes(), password_hash.as_str())?;

    Ok(())
}

pub async fn get_user_with_credentials(
    pool: &PgPool,
    email: &str,
) -> Result<Option<(uuid::Uuid, String)>, sqlx::Error> {

    let record = sqlx::query!(
        r#"
            SELECT id, password FROM users
            WHERE email = $1
        "#,
        email
    )
    .fetch_optional(pool)
    .await?;

    let row = record
        .map(|r| {
            (r.id, r.password)
        });

    Ok(row)

}
pub fn hash_password(
    password: String,
) -> Result<String, password_hash::Error> {

    let salt = SaltString::generate();
    let password_hash = Argon2::new(
        Algorithm::Argon2id,
        Version::V0x13,
        Params::new(15000, 2, 1, None).unwrap(),
    )
    .hash_password_with_salt(password.as_bytes(), salt.as_bytes())?
    .to_string();
    

    Ok(password_hash)
}