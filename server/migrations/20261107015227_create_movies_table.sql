CREATE TABLE movies(
    id uuid NOT NULL DEFAULT uuidv7(),
    PRIMARY KEY (id),
    title TEXT NOT NULL,
    release_date DATE NOT NULL,
    duration INT NOT NULL,
    imdb_rating FLOAT NOT NULL,
    popularity INT NOT NULL,
    directors TEXT[] NOT NULL,
    writers TEXT[] NOT NULL,
    stars TEXT[] NOT NULL,
    summary TEXT NOT NULL,
    portrait_url TEXT NOT NULL,
    banner_url TEXT NOT NULL
);
