import { Request, Response, Router } from 'express';

const router = Router();

router.get(
  '/:categoryId/products/:productsId',
  (req: Request, res: Response) => {
    const { categoryId, productsId } = req.params;
    res.json({
      categoryId,
      productsId,
      price: 2000
    });
  }
);

router.get('/', (req: Request, res: Response) => {
  res.json([
    {
      name: 'category 1'
    },
    {
      name: 'category 2'
    }
  ]);
});

export { router as categoriesRouter };
