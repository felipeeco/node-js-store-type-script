import { Express } from 'express';
import { categoriesRouter } from './categories.router';
import { usersRouter } from './users.router';
import { productsRouter } from './products.router';

export function routerApi(app: Express) {
  app.use('/categories', categoriesRouter);
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
}
