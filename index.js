const express = require('express');
const port = 8000;
const expressLayouts = require('express-ejs-layouts')


let app = express();

//calling static files
app.use(express.static('./assets'))

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(expressLayouts);

app.use('/', require('./routes/index'))

app.listen(port, function(err){
    if(err){console.log(`Server is down`)};
    console.log(`Server is running on port ${port}`);
})