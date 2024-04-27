/* eslint-disable prettier/prettier */
import * as Joi from 'joi';

export const CreateProductSchema = Joi.object({
 id: Joi.number().integer().positive().required(),
 name: Joi.string().min(3).max(50).required(),
 price: Joi.number().positive().min(10).required(),
 description: Joi.string().max(255),
 category: Joi.string().min(3).max(50),
 image: Joi.string().uri()
});

export const UpdateProductSchema = Joi.object({
 id: Joi.number().integer().positive().required(),
 name: Joi.string().min(3).max(50),
 price: Joi.number().positive().min(10),
 description: Joi.string().max(255),
 category: Joi.string().min(3).max(50),
 image: Joi.string().uri()
});
