import Joi, { ObjectSchema } from 'joi';

const loginSchema: ObjectSchema = Joi.object().keys({
  username: Joi.string().required().min(4).max(8).messages({
    'string.base': 'Username must be a string',
    'string.min': 'Username must be at least 4 characters',
    'string.max': 'Username must be at most 8 characters',
    'string.empty': 'Username is required'
  }),
  password: Joi.string().required().min(4).max(8).messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must be at least 4 characters',
    'string.max': 'Password must be at most 8 characters',
    'string.empty': 'Password is required'
  })
});

export { loginSchema };
