CREATE TABLE episodes(
    id uuid NOT NULL,
    PRIMARY KEY (id),
    title TEXT NOT NULL,
    index INT NOT NULL,
    season uuid NOT NULL references seasons(id),
    duration INT NOT NULL
);
