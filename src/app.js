/* eslint-disable comma-dangle */
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');

require('dotenv').config();

require('./database/index');

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
  })
);
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/v1', require('./routes/User'));
app.use('/v1', require('./routes/Auth'));

module.exports = { app };
