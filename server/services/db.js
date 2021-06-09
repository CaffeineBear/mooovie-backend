/* eslint-import/prefer-default-export */
import PG from 'pg';
import config from '../../config.js';

const { Pool } = PG;
const pool = new Pool(config.db);

const emptyOrRows = (rows) => {
  if (!rows) {
    return [];
  }
  return rows;
};

/**
 * Query the database using the pool
 * @param {*} query - which must include 'text' and 'values' fields
 *
 * @see https://node-postgres.com/features/pooling#single-query
 */
const poolQuery = async (query) => {
  const { rows } = await pool.query(query);
  return emptyOrRows(rows);
};

const db = {
  pool: {
    query: poolQuery,
  },
};

export default db;
