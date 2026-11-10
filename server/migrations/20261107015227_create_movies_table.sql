CREATE TABLE movies(
    id uuid NOT NULL DEFAULT uuidv7(),
    PRIMARY KEY (id),
    title TEXT NOT NULL,
    release_year TEXT NOT NULL,
    duration INT NOT NULL,
    imdb_rating FLOAT NOT NULL,
    genre uuid NOT NULL references genres(id),
    popularity INT NOT NULL,
    director TEXT NOT NULL,
    writers TEXT[] NOT NULL,
    stars TEXT[] NOT NULL,
    summary TEXT NOT NULL,
    image_url TEXT NOT NULL
);
