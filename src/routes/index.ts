import { Express, Router } from 'express';
import { categoriesRouter } from './categories.router';
import { usersRouter } from './users.router';
import { productsRouter } from './products.router';
import { logErrors, errorHandler } from '../middlewares/error.handler';

export function routerApi(app: Express) {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/categories', categoriesRouter);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
}

export function routerApiV2(app: Express) {
  const router = Router();
  app.use('/api/v2', router);
  router.use('/categories', categoriesRouter);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use(logErrors);
  router.use(errorHandler);
}
