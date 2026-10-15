import pg from 'pg';

export const pool = new pg.Pool({
  // eslint-disable-next-line no-undef
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export const query = (text, params) => pool.query(text, params);
