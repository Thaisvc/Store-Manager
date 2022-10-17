const camelize = require('camelize');
const conn = require('./connection');

const allSales = async () => {
  const [data] = await conn.execute(
    ` SELECT sale_p.sale_id AS saleId , sale_p.product_id AS productId, sale_p.quantity, sale.date
  FROM StoreManager.sales_products AS sale_p
  INNER JOIN StoreManager.sales AS sale
  ON sale_p.sale_id  = sale.id
  ORDER BY  sale_p.sale_id  , sale_p.product_id
   `,
);
  return data;
};

const SelectId = async (saleID) => {
  const [result] = await conn.execute(
    ` SELECT  sale_p.product_id , sale_p.quantity, sale.date
  FROM StoreManager.sales_products AS sale_p
  INNER JOIN StoreManager.sales AS sale
  ON sale_p.sale_id  = sale.id
  WHERE sale_id  = (?) ORDER BY  sale_id  , product_id
   `,
    [saleID],
  );
  return camelize(result);
};

module.exports = {
  allSales,
  SelectId,
};
