import { Request, Response, Router } from 'express';
import { faker } from '@faker-js/faker';
import { User } from '../models/user.interface';
import { UsersService } from 'src/services/users.services';

const router = Router();
const service = new UsersService();
let users: User[] = [];

function createRandomUser(): User {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past()
  };
}

router.get('/', async (req: Request, res: Response) => {
  const { limit, offset } = req.query;
  users = await service.find();
  if (limit && offset) {
    res.json(users);
  } else {
    res.send('there is not answer');
  }
});

export { router as usersRouter };
