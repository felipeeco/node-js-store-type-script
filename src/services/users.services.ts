import { pool } from '../libs/postgres.pool';
import { sequelize } from '../libs/sequelize';

export class UsersService {
  async find(): Promise<any[]> {
    const [results] = await sequelize.query('SELECT * FROM tasks');
    return results;
  }
}