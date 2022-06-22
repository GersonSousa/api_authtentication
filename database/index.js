const Sequelize = require('sequelize');
const database = require('../config/config');

const connection = new Sequelize(database);

module.exports = connection;
