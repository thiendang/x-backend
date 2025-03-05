import Joi, { ObjectSchema } from 'joi';

const signupSchema: ObjectSchema = Joi.object().keys({
  username: Joi.string().required().min(4).max(8).messages({
    'string.base': 'Username must be a string',
    'string.min': 'Username must be at least 4 characters',
    'string.max': 'Username must be at most 8 characters',
    'string.empty': 'Username is required'
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.email': 'Email must be a valid email',
    'string.empty': 'Email is required'
  }),
  password: Joi.string().min(4).max(8).required().messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must be at least 4 characters',
    'string.max': 'Password must be at most 8 characters',
    'string.empty': 'Password is required'
  }),
  avatarColor: Joi.string().required().messages({
    'any.required': 'Avatar color is required'
  }),
  avatarImage: Joi.string().required().messages({
    'any.required': 'Avatar image is required'
  })
});

export { signupSchema };
