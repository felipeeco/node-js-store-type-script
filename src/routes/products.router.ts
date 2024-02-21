import { Request, Response, Router } from 'express';
import { Product } from '@models/product.interface';
import { ProdutcsServices } from '../services/products.services';

const router = Router();
const service = new ProdutcsServices();

router.get('/', async (req: Request, res: Response) => {
  const products: Product[] = await service.find();
  res.json(products);
});

//la ruta que no es dinamica siempre va de primero
router.get('/filter', (req: Request, res: Response) => {
  res.send('Hello, I am the answer');
});

//est ruta es dinamica y va despues con el fin de evitar que se pise la url
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const products = await service.findOne(id);
  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404).json([
      {
        message: 'Not found it'
      }
    ]);
  }
});

router.post('/create-product', (req, res) => {
  try {
    const product: Product = {
      id: service.generateId(),
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image
    };

    service.create(product);
    res.status(201).json({
      message: 'created'
    });
  } catch (error) {
    res.status(400).json({
      message: 'bad request'
    });
  }
});

router.put('/change-product/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    service.update(Number(id), body);
    res.status(200).json({
      message: 'updated'
    });
  } catch (error) {
    res.status(400).json({
      message: 'bad request'
    });
  }
});

router.put('/delete-product/:id', (req, res) => {
  const { id } = req.params;

  try {
    service.delete(Number(id));
    res.json({
      message: 'deleted'
    });
  } catch (error) {
    res.status(400).json({
      message: 'bad request'
    });
  }
});

export { router as productsRouter };
