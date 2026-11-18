pub struct Credentials {
    pub email: String,
    pub password: String,
}

impl Credentials {

    pub fn new(
        email: String,
        password: String,
    ) -> Self {

        Self {
            email,
            password,
        }
    }
}