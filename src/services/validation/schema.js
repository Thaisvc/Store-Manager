const Joi = require('joi');

const schemaProduct = Joi.object({
  name: Joi.string().required().min(5),
}).messages({
'string.min': '"name" length must be at least 5 characters long',
});

const schemaProductEdit = Joi.object({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().required().min(5),
}).messages({
  'string.min': '"name" length must be at least 5 characters long',
});

const schemaAddSales = Joi.object({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().required().min(5),
}).messages({
  'string.min': '"name" length must be at least 5 characters long',
});

module.exports = {
  schemaProduct,
  schemaProductEdit,
  schemaAddSales,
};
