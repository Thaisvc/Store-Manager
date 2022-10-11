const productsService = require('../services');
const errorMap = require('../util/erroMap');

const getProducts = async (_req, res) => {
  const { message } = await productsService.getAllProducts();
  res.status(200).json(message);
};

const findProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findID({ id });
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  getProducts,
  findProduct,
};
