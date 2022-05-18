if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();

const indexRouter = require('./routes/index');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
     const db = mongoose.connection
     db.on('error',error => console.error(error) );
     db.once('open', () => console.log('Connected to Mongoose') );

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use('/', indexRouter);
app.listen(3000);

