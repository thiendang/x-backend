import Joi, { ObjectSchema } from 'joi';

const emailSchema: ObjectSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.email': 'Email must be a valid email',
    'string.empty': 'Email is required'
  })
});

const passwordSchema: ObjectSchema = Joi.object().keys({
  password: Joi.string().min(4).max(8).required().messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must be at least 6 characters',
    'string.max': 'Password must be at most 8 characters',
    'string.empty': 'Password is required'
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Passwords do not match',
    'any.required': 'Confirm password is required',
    'string.base': 'Confirm password must be a string',
    'string.empty': 'Confirm password is required'
  })
});

export { emailSchema, passwordSchema };