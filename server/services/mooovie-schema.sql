DROP TABLE IF EXISTS Movies CASCADE; 
DROP TABLE IF EXISTS Theatres CASCADE; 
DROP TABLE IF EXISTS ShowTimes CASCADE;

CREATE TABLE Movies(
	id VARCHAR PRIMARY KEY,
  title VARCHAR NOT NULL,		
  rating VARCHAR,   
  poster VARCHAR
);

CREATE TABLE Theatres (
  id VARCHAR PRIMARY KEY,
	name VARCHAR NOT NULL -- should be 512 characters.
);

CREATE TABLE ShowTimes (
  id SERIAL PRIMARY KEY,
  movie_id VARCHAR NOT NULL,
  theatre_id VARCHAR NOT NULL,
  showing_time TIME NOT NULL, 
  CONSTRAINT fk_movie
    FOREIGN KEY (movie_id)
      REFERENCES Movies(id),
  CONSTRAINT fk_theature 
    FOREIGN KEY (theatre_id)
      REFERENCES Theatres(id)
);

