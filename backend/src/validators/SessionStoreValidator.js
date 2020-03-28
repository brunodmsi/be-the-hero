const { celebrate, Joi } = require('celebrate');

const body = Joi.object().keys({
  id: Joi.string().required()
})

const schema = celebrate({
  body
});

module.exports = schema;
