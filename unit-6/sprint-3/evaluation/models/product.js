const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String },
    // other product details
});

module.exports = mongoose.model('Product', productSchema);