CREATE TABLE movie_genre_relation(
    id uuid NOT NULL,
    PRIMARY KEY (id),
    movie_id uuid NOT NULL references movies (id),
    genre_id uuid NOT NULL references genres (id)
);
