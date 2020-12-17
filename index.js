const cookieParser = require('cookie-parser');
const express = require('express');
const port = 8000;
const expressLayouts = require('express-ejs-layouts')
const db = require('./config/mongoose')

// Used for session cookie
const session = require('express-session');
const passport = require('passport')
const passportLocal = require('./config/passport_local_strategy');


let app = express();

app.use(express.urlencoded());
app.use(cookieParser());

app.use(expressLayouts);

//calling static files
app.use(express.static('./assets'))

//extracting styles & scripts & putting into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views')



app.use(session({
    name : 'A-3',
    //todo change the secret key before deployment
    secret : 'something',
//if the user is not signed in , then do you want to save extra data in session cookie (no), then false
    saveUninitialized : false,
//if no changes are made to the existing data do you want to rewrite the cookie id
    resave : false,
    cookie : {
        maxAge : (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes/index'))

app.listen(port, function(err){
    if(err){console.log(`Server is down`)};
    console.log(`Server is running on port ${port}`);
})