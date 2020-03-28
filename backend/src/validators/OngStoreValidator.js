const { celebrate, Joi } = require('celebrate');

const body = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  whatsapp: Joi.string().required().min(10).max(11),
  city: Joi.string().required(),
  uf: Joi.string().required().length(2)
});

const schema = celebrate({
  body
});

module.exports = schema;
