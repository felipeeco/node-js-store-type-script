import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json([
      {
        limit,
        offset,
      },
    ]);
  } else {
    res.send('there is not answer');
  }
});

export { router as usersRouter };
