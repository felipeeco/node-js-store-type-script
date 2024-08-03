import { Pool } from 'pg';

export const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'nico',
  password: '123',
  database: 'my_store'
});
