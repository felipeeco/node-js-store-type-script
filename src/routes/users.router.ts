import { Request, Response, Router } from 'express';
import { User } from '../models/user.interface';
import { UsersService } from '../services/users.services';

const router = Router();
const service = new UsersService();
let users: User[] = [];

router.get('/', async (req: Request, res: Response) => {
  users = await service.find();
  res.json(users);
});

export { router as usersRouter };
