// const errorMap = require('../helpers/erroMap');

const errorMap = require('../helpers/erroMap');
const saleService = require('../services/sales.service');

const allSale = async (_req, res) => {
  const { message } = await saleService.list();
  res.status(200).json(message);
};

const salesFindId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await saleService.findId(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

const addNewSales = async (req, res) => {
  const result = await saleService.addSales(req.body);

  return res.status(201).json({ message: result });
 };

module.exports = {
  allSale,
  salesFindId,
  addNewSales,
};
