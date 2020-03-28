const { celebrate, Joi } = require('celebrate');

const params = Joi.object().keys({
  id: Joi.number().required()
})

const headers = Joi.object({
  authorization: Joi.string().required().length(8)
}).unknown()

const schema = celebrate({
  params,
  headers
})

module.exports = schema;
