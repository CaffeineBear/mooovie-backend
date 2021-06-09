const { env } = process;

const config = {
  db: {
    host: env.MOOOVIE_DB_HOST,
    port: env.MOOOVIE_DB_PORT,
    user: env.MOOOVIE_DB_USER,
    password: env.MOOOVIE_DB_PASSWORD,
    database: env.MOOOVIE_DB_NAME,
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

export default config;
