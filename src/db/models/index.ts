import { Sequelize } from 'sequelize';
import { User, UserSchema } from './user.model';

export function setupModels(sequelize: Sequelize) {
  User.init(UserSchema, User.config(sequelize));
}
