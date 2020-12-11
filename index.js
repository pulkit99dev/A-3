const express = require('express');
const port = 8000;
const expressLayouts = require('express-ejs-layouts')
const db = require('./config/mongoose')


let app = express();

app.use(expressLayouts);

//calling static files
app.use(express.static('./assets'))

//extracting styles & scripts & putting into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views')

app.use('/', require('./routes/index'))

app.listen(port, function(err){
    if(err){console.log(`Server is down`)};
    console.log(`Server is running on port ${port}`);
})