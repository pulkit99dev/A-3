const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learning');

let db = mongoose.connection;

db.on('err', function(err){
    if(err){console.log(`Failed to connect to db`)};
})

db.once('open', function(){
    console.log('Connected to db');
})