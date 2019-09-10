const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/about', (req, res)=>{
  res.render('about');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/new', (req, res, next) => {
  res.render('products/new');
});


module.exports = router;