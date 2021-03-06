const Sequelize = require('sequelize');
const database = require('../config/config');

const User = require('../models/User');

const connection = new Sequelize(database);

User.init(connection);

module.exports = connection;
