import { Express } from 'express';
import { categoriesRouter } from './categories.router';
import { usersRouter } from './users.router';

export function routerApi(app: Express) {
  app.use('/categories', categoriesRouter);
  app.use('/users', usersRouter);
}
