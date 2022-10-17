const { schemaProduct, schemaProductEdit } = require('./schema');

const validateBody = (name) => {
  const { error } = schemaProduct.validate(name);
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

const validateBodyUpdate = (updateName) => {
  const { error } = schemaProductEdit.validate(updateName);
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validateBody,
  validateBodyUpdate,
};
