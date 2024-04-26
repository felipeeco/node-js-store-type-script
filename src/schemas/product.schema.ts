/* eslint-disable prettier/prettier */
import * as Joi from 'joi';

export const productSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
  name: Joi.string().min(3).max(50).required(),
  price: Joi.number().positive().required(),
  description: Joi.string().max(255),
  category: Joi.string().min(3).max(50).required(),
  image: Joi.string().uri().required()
});
