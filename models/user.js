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
    },
    avatar:{
        type: String
    }
},{
    timestamps : true
});

const User = mongoose.model('User', userSchema);

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', AVATAR_Path))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

module.exports= User;

