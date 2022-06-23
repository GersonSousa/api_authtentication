require('dotenv').config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

module.exports = {
  username,
  password,
  database,
  host,
  dialect,
  define: {
    timestamps: true,
    underscored: true,
  },
};
