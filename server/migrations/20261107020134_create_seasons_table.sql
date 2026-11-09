CREATE TABLE seasons(
    id uuid NOT NULL,
    PRIMARY KEY (id),
    index INT NOT NULL,
    series uuid NOT NULL references series(id)
);
