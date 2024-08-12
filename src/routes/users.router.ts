import { Request, Response, Router, NextFunction } from 'express';
import { UsersService } from '../services/users.services';

const router = Router();
const service = new UsersService();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error: any) {
    next(error);
  }
});

router.post(
  '/create-user',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = await req.body;
      await service.create(body);
      res.status(201).json({
        message: 'user created'
      });
    } catch (error: any) {
      next(error);
    }
  }
);

export { router as usersRouter };
