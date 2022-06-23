/* eslint-disable comma-dangle */
const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          validate: { len: { args: [5, 10], msg: 'Minimo 5 e maximo 10' } },
        },
      },
      { sequelize: connection }
    );
  }
}

module.exports = User;
