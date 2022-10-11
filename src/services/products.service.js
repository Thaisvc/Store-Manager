const productModel = require('../models');

const getAll = async () => {
  const product = await productModel.getAllProducts();
  return { type: null, message: product };
};

const findID
module.exports = {
  getAll,
};
