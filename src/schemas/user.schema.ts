/* eslint-disable prettier/prettier */
import * as Joi from 'joi';

export const UserSchema = Joi.object({
 email: Joi.string().email().required(),
 password: Joi.string().min(3).max(50).required()
});