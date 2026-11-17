use argon2::{Algorithm, Argon2, Params, PasswordHasher, Version, password_hash::{self, phc::SaltString}};

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