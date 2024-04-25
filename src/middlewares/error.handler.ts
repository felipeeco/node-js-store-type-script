import { Request, Response, NextFunction } from 'express';

export function logErrors(
  error: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  res.status(error.output.statusCode).json({
    message: error.message
  });
}
