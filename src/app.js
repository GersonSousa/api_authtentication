const express = require('express');
require('dotenv').config();

require('./database/index');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/v1', require('./routes/User'));

module.exports = { app };
