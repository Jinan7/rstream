pub struct User{
    pub id: uuid::Uuid,
    pub name: String,
    pub email: String,
    pub password: String,
}

impl User {

    pub fn new(
        name: String,
        email: String,
        password: String,
    ) -> Self {
        User {
            id: uuid::Uuid::now_v7(),
            name,
            email,
            password,
        }
    }
}