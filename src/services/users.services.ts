import { sequelize } from '../libs/sequelize';

export class UsersService {
  async find(): Promise<any[]> {
    const [results] = await sequelize.query('SELECT * FROM users');
    return results;
  }
}
