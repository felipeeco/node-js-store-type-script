import { Request, Response, Router } from 'express';

const router = Router();

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json([
    {
      id,
      name: 'Product 1',
      price: 2000,
    },
  ]);
});

export { router as ProductsRouter };
