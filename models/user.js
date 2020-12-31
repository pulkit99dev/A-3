const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
const AVATAR_Path = path.join('/uploads/users/avatars');

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


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', AVATAR_Path))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

  //! Static methods or functions
  userSchema.statics.uploadedAvatar = multer({storage : storage}).single('avatar');
  userSchema.statics.avatarPath = AVATAR_Path;

  const User = mongoose.model('User', userSchema);

  module.exports= User;

