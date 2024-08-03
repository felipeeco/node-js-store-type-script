import { Request, Response, Router, NextFunction } from 'express';
import { User } from '../models/user.interface';
import { UsersService } from '../services/users.services';

const router = Router();
const service = new UsersService();
let users: User[] = [];

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    users = await service.find();
    res.json(users);
  } catch (error: any) {
    next(error);
  }
});

export { router as usersRouter };
