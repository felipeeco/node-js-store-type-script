import { sequelize } from '../libs/sequelize';
import { User } from '../db/models/user.model';

export class UsersService {
  async find(): Promise<User[]> {
    const results = await sequelize.models.User.findAll();
    return results;
  }
}
