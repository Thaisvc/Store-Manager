const Joi = require('joi');

const schemaProduct = Joi.object({
  name: Joi.string().required().min(5),
}).messages({
'string.min': '"name" length must be at least 5 characters long',
});

module.exports = {
  schemaProduct,
};
