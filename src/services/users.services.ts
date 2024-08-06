import { getConnection } from '../libs/postgres';
import { pool } from '../libs/postgres.pool';

export class UsersService {
  async find(): Promise<any[]> {
    const client = await pool;
    const answer = await client.query('SELECT title FROM tasks');
    return answer.rows;
  }
}