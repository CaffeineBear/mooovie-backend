import dateFormat from 'dateformat';
import StatusError from '../errors/http/StatusError';
import db from '../services/db.js';

const queryShowTimes = async () => {
  const query = {
    name: 'fetch-theatre-showtimes',
    text: [
      'SELECT t.id, t.name, s.movie_id, m.title, m.rating, m.poster, s.showing_time',
      'FROM showtimes as s',
      'INNER JOIN theatres as t on s.theatre_id = t.id',
      'INNER JOIN movies as m on s.movie_id = m.id',
      'ORDER BY t.id, m.title, s.showing_time',
    ].join(' '),
    values: [],
  };
  try {
    const records = await db.pool.query(query);
    if (!records || records.length === 0) {
      throw new Error('Not enough records');
    }
    const result = [];
    records.forEach(({
      id, name, movie_id, title, rating, poster, showing_time,
    }) => {
      const newTimeFormat = new Date(`2021-06-09T${showing_time}`);
      const time = dateFormat(newTimeFormat, 'h:mm tt');

      // Looking whether theatre is added on object.
      const matchingTheatreObj = result.find((currData) => currData.id === id);
      if (matchingTheatreObj) {
        // Looking whether movie is added on theatre's showtimes.
        const movieMatching = matchingTheatreObj.showtimes.find(
          (currEntry) => currEntry.movie_id === movie_id,
        );
        if (movieMatching) {
          movieMatching.timetables.push(time);
          return;
        }
        matchingTheatreObj.showtimes.push({
          movie_id,
          title,
          rating,
          poster,
          timetables: [time],
        });
        return;
      }

      // Add new theatre with movie schedule.
      result.push({
        id,
        name,
        showtimes: [
          {
            movie_id,
            title,
            poster,
            rating,
            timetables: [time],
          },
        ],
      });
    });

    return result;
  } catch (err) {
    console.log(err);
    throw new StatusError(500, 'Internal Server Error');
  }
};

const TheatreModel = {
  read: queryShowTimes,
};

export default TheatreModel;
