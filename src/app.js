const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

// -------------------------------------------------------------------
require('express-async-errors');
const productsRoutes = require('./routes/product.routers');

app.use('/products', productsRoutes);

app.use((error, _req, res, _next) => {
  res.status(error.status || 500).json({ message: `${error.message}` });
});
module.exports = app;
