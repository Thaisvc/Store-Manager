const express = require('express');

const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get('/', productsController.allProducts);

router.get('/:id', productsController.getProduct);
router.post('/', productsController.addNewProduct);

module.exports = router;
