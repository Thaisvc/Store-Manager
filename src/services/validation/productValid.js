const { schemaProduct } = require('./schema');

const validateBody = (name) => {
  const { error } = schemaProduct.validate(name);
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validateBody,
};
