const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name       : String,
  price      : Number,
  imageUrl   : String,
  description: String,
});

const product = mongoose.model('Product', productSchema);

module.exports = product;

