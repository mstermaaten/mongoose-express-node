const express = require('express');
const Product = require('../models/product');


const router = express.Router();

router.get('/', (req, res, next) => {
  Product.find({}, (err, products) => {
    if (err) {
      return next(err);
    }

    res.render('products/index', {
      products: products
    });
  });
});

router.post('/', (req, res, next) => {
  const productInfo = {
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description
  };

  const newProduct = new Product(productInfo);
  
  newProduct.save( (err) => {
    if (err) { return next(err) }
    return res.redirect('/products');
  });
})

module.exports = router;