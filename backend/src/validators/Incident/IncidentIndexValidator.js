const { celebrate, Joi } = require('celebrate');

const query = Joi.object().keys({
  page: Joi.number()
})

const schema = celebrate({
  query
})

module.exports = schema;
