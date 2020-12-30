const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
const AVATAR_Path = path.join('/uploads/user/avatars');

let userSchema = new mongoose.Schema({
    email: {
        type : String,
        require : true,
        unique : true
    },
    password: {
        type : String,
        require : true
    },
    name: {
        type: String,
        require : true
    }
},{
    timestamps : true
});

const User = mongoose.model('User', userSchema);

module.exports= User;

