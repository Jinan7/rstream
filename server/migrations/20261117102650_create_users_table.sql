CREATE TABLE users(
    id uuid NOT NULL,
    PRIMARY KEY (id),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)