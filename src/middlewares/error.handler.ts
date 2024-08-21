import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'sequelize';

export function logErrors(
  error: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  if (error instanceof ValidationError) {
    res.status(409).json({
      message: error.errors[0].message
    });
  } else {
    res.status(error.output.statusCode).json({
      message: error.message
    });
  }
}
