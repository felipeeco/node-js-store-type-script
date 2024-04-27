import { Request, Response, Router } from 'express';
import { faker } from '@faker-js/faker';
import { User } from '@models/user.interface';

const router = Router();

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

const users: User[] = [];
while (users.length < 4) {
  users.push(createRandomUser());
}

router.get('/', (req: Request, res: Response) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json(users);
  } else {
    res.send('there is not answer');
  }
});

export { router as usersRouter };
