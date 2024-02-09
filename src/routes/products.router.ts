import { Request, Response, Router } from 'express';
import { faker } from '@faker-js/faker';
import { Product } from '../models/product.interface';

const router = Router();

function generateProduct(): Product {
  return {
    id: faker.number.int(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    image: faker.image.url(),
  };
}

router.get('/', (req: Request, res: Response) => {
  const { size } = req.query;
  const limit = size || 10;
  const products: Product[] = [];
  while (products.length < Number(limit)) {
    products.push(generateProduct());
  }
  res.json(products);
});

//la ruta que no es dinamica siempre va de primero
router.get('/filter', (req: Request, res: Response) => {
  res.send('Hello, I am the answer');
});

//est ruta es dinamica y va despues con el fin de evitar que se pise la url
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

export { router as productsRouter };
