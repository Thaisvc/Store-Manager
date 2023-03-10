const express = require('express');

const router = express.Router();

const saleControlle = require('../controllers/sales.controller');

router.get('/', saleControlle.allSale);

router.get('/:id', saleControlle.salesFindId);

router.post('/', saleControlle.addNewSales);

module.exports = router;
