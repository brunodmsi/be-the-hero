const { celebrate, Joi } = require('celebrate');

const headers = Joi.object({
  authorization: Joi.string().required().length(8)
}).unknown()

const schema = celebrate({
  headers
});

module.exports = schema;
