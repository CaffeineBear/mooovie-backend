import db from './db.js';
import movieData from '../data/movie_metadata.js';
import showTimeData from '../data/theater_showtimes.js';

const insertData = async () => {
  try {
    console.log(db);
    // console.log(movieData);
    let values = [];
    movieData.forEach(({
      id, title, rating, poster,
    }) => {
      values.push(`('${id}', '${title}', '${rating}', '${poster}')`);
    });

    // console.log(values);
    let query = `INSERT INTO Movies (id, title, rating, poster) VALUES ${
      values.join(', ')}`;
    console.log(query);

    await db.pool.query(query);

    values = [];
    query = [];
    const showtimeValues = [];

    showTimeData.forEach(({ id, name, showtimes }) => {
      values.push(`('${id}', '${name}')`);
      Object.keys(showtimes).forEach((movie_id) => {
        const timetables = showtimes[movie_id];
        timetables.forEach((time) => {
          showtimeValues.push(`('${id}', '${movie_id}', '${time}')`);
        });
      });
    });

    query = `INSERT INTO Theatres (id, name) VALUES ${
      values.join(', ')}`;
    console.log(query);
    await db.pool.query(query);

    query = `INSERT INTO ShowTimes (theatre_id, movie_id, showing_time) VALUES${
      showtimeValues.join(', ')}`;
    await db.pool.query(query);
  } catch (err) {
    console.log(err);
  }
};
insertData();
