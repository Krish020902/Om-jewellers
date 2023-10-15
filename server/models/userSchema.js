const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cpassword : {
        type : String,
    }
})

const User = new mongoose.model('User', UserSchema)

module.exports = User;