const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    phone : {
        type: Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
})

const Vendor = new mongoose.model('Vendor', vendorSchema)

module.exports = Vendor;