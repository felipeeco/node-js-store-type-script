import * as boom from '@hapi/boom';
import { sequelize } from '../libs/sequelize';
import { User } from '../db/models/user.model';
import { UserSchema } from '../schemas/user.schema';

export class UsersService {
  async find(): Promise<User[]> {
    const results = await sequelize.models.User.findAll();
    return results;
  }

  async findOne(id: number): Promise<User | null> {
    try {
      const user: User | null = await sequelize.models.User.findByPk(id);
      if (!user) throw boom.notFound('User not found');
      return user;
    } catch (err) {
      throw boom.internal('Failed to find user', err);
    }
  }

  async create(newUser: Partial<User>): Promise<void> {
    const { error } = UserSchema.validate(newUser, {
      abortEarly: false
    });

    if (error) {
      throw boom.badRequest(error);
    } else {
      try {
        await sequelize.models.User.create(newUser);
      } catch (err) {
        throw boom.internal('Failed to create user', err);
      }
    }
  }

  async update(id: number, changes: Partial<User>): Promise<void> {
    const { error } = UserSchema.validate(changes, {
      abortEarly: false
    });

    const user = await this.findOne(id);

    if (error) throw boom.badRequest(error);
    if (!user) throw boom.notFound();

    try {
      await user?.update(changes);
    } catch (err) {
      throw boom.internal('Failed to update user', err);
    }
  }

  async delete(id: number): Promise<void> {
    const user = await this.findOne(id);

    if (!user) {
      throw boom.notFound();
    } else {
      try {
        await user?.destroy;
      } catch (err) {
        throw boom.internal('Failed to delete user', err);
      }
    }
  }
}
