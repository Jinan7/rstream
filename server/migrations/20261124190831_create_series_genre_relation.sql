CREATE TABLE series_genre_relation(
    id uuid NOT NULL,
    PRIMARY KEY (id),
    series_id uuid NOT NULL references series (id),
    genre_id uuid NOT NULL references genres (id)
);

