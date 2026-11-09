INSERT INTO movies(
    title,
    release_year, 
    duration, 
    imdb_rating, 
    genre, 
    director, 
    writers, 
    stars, 
    summary, 
    image_url
)
VALUES (
    'The Godfather',
    '1972',
    175,
    9.2,
    (SELECT id FROM genres WHERE genre = 'crime' LIMIT 1),
    'Francis Ford Coppola',
    ARRAY['Mario Puzo','Francis Ford Coppola'],
    ARRAY['Marlo Brandon','Al Pacino','James Caan'],
    'The Godfather "Don" Vito Corleone is the head of 
     the Corleone mafia family in New York. He is at the 
     event of his daughter''s wedding. Michael, Vito''s 
     youngest son and a decorated WWII Marine is also 
     present at the wedding. Michael seems to be uninterested
     in being a part of the family business. Vito is a 
     powerful man, and is kind to all those who give him 
     respect but is ruthless against those who do not. But 
     when a powerful and treacherous rival wants to sell 
     drugs and needs the Don''s influence for the same, 
     Vito refuses to do it. What follows is a clash between Vito''s 
     fading old values and the new ways which may cause Michael 
     to do the thing he was most reluctant in doing and wage 
     a mob war against all the other mafia families which 
     could tear the Corleone family apart.',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5ZLkLp7blKo1rX0RmmTB72rsBAiHUobtHUF4sUBJnq31D5HwHVcrVY8&s=10'
);
