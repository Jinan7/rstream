CREATE TABLE episodes(
    id uuid NOT NULL,
    PRIMARY KEY (id),
    title TEXT NOT NULL,
    index INT NOT NULL,
    season uuid NOT NULL references seasons(id),
    release_date DATE NOT NULL,
    duration INT NOT NULL,
    summary TEXT NOT NULL,
    portrait_url TEXT NOT NULL,
    banner_url TEXT NOT NULL
);
