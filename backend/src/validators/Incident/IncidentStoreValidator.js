const { celebrate, Joi } = require('celebrate');

const body = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  value: Joi.number().required()
})

const headers = Joi.object({
  authorization: Joi.string().required().length(8)
}).unknown()

const schema = celebrate({
  headers,
  body
});

module.exports = schema;
