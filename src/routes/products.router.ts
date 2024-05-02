import { Request, Response, Router, NextFunction } from 'express';
import { Product } from '../models/product.interface';
import { ProductsServices } from '../services/products.services';

const router = Router();
const service = new ProductsServices();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products: Product[] = await service.find();
    res.json(products);
  } catch (error: any) {
    next(error);
  }
});

//la ruta que no es dinamica siempre va de primero
router.get('/filter', (req: Request, res: Response) => {
  res.send('Hello, I am the answer');
});

//est ruta es dinamica y va despues con el fin de evitar que se pise la url
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const products = await service.findOne(+id);
    if (products) {
      res.status(200).json(products);
    } else {
      res.status(404).json([
        {
          message: 'Not found it'
        }
      ]);
    }
  } catch (error) {
    next(error);
  }
});

router.post(
  '/create-product',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product: Product = {
        id: service.generateId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image
      };

      await service.create(product);
      res.status(201).json({
        message: 'created'
      });
    } catch (error: any) {
      next(error);
    }
  }
);

router.put(
  '/update-product/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const body = req.body;

    try {
      await service.update(Number(id), body);
      res.status(200).json({
        message: 'updated'
      });
    } catch (error: any) {
      next(error);
    }
  }
);

router.put(
  '/delete-product/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      await service.delete(Number(id));
      res.status(200).json({
        message: 'deleted'
      });
    } catch (error: any) {
      next(error);
    }
  }
);

export { router as productsRouter };
