import { Express } from 'express';
import { categoriesRouter } from './categories.router';

export function routerApi(app : Express) {
   app.use('/categories', categoriesRouter);
}

