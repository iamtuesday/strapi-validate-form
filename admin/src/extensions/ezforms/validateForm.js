const Joi = require('joi')

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.empty': `This field is required.`,
    'string.min': `This field length must be at least 3 characters long.`,
    'string.max': `This field length must be less than or equal to 30 characters long.`,
  }),
  phone: Joi.string()
    .required()
    .pattern(new RegExp(/^(1\s?)?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/))
    .messages({
      'string.empty': `This field is required.`,
      'string.pattern.base': 'Please enter a telephone number.',
    }),

  email: Joi.string()
    .required()
    .pattern(
      new RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      ),
    )
    .messages({
      'string.empty': `This field is required.`,
      'string.pattern.base': 'Invalid Email',
    }),

  service: Joi.string().required().messages({
    'string.empty': `This field is required.`,
  }),

  message: Joi.string().allow(null, ''),
  // token: Joi.string().required().messages({
  //   'string.empty': `The reCaptcha is not valid.`,
  // }),
})

module.exports = { schema }
