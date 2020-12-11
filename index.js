const express = require('express');
const port = 8000;



let app = express();

app.set('view engine', 'ejs');
app.set('views', './views')

app.use('/', require('./routes/index'))

app.listen(port, function(err){
    if(err){console.log(`Server is down`)};
    console.log(`Server is running on port ${port}`);
})