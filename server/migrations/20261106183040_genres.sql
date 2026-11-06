CREATE TABLE genres(
    id uuid NOT NULL DEFAULT uuidv7(),
    PRIMARY KEY (id),
    genre TEXT NOT NULL,
);


