const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    productType : {
        type: String,
        required : true
    },
    seller : {
        type : String,
    },
    price : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    category : {
        type : String,
    }
})

const Product = new mongoose.model('Product', productSchema)

module.exports = Product;