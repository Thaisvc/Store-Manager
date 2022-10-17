const SalesModel = require('../models/sale.model');

const list = async () => {
  const sale = await SalesModel.allSales();
  return { type: null, message: sale };
};

const findId = async (id) => {
  const saleId = await SalesModel.SelectId(id);
  if (saleId.length > 0) return { type: null, message: saleId };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' };
};
module.exports = {
  list,
  findId,
};
