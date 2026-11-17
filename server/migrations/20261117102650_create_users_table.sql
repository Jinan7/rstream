CREATE TABLE users(
    id uuid NOT NULL,
    PRIMARY KEY (id),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
)