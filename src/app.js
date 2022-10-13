const express = require('express');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

// -------------------------------------------------------------------
const productsRoutes = require('./routes/product.routers');

app.use('/products', productsRoutes);

module.exports = app;
