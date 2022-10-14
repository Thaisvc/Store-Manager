const express = require('express');
const validateName = require('../controllers/middlewares/validationProduct');

const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get('/', productsController.allProducts);

router.get('/:id', productsController.getProduct);

router.post('/', validateName, productsController.insertNewProduct);

module.exports = router;
