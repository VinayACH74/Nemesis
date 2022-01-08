const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    mobileno:{
        type:Number,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    }
})

const User = mongoose.model("USER",userSchema);

module.exports = User;
