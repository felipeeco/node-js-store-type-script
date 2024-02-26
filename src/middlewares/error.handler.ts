import { Request, Response, NextFunction } from 'express';

export function logErrors(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('print from middleware');
  next(error);
}

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  });
}
