/* eslint-disable comma-dangle */
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [2, 255],
              msg: 'Campo nome não pode estar vazio',
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          unique: {
            msg: 'Email já existe',
          },
          validate: {
            isEmail: {
              msg: 'Digite um email valido',
            },
          },
        },
        password_hash: {
          type: DataTypes.STRING,
          defaultValue: '',
        },
        password: {
          type: DataTypes.VIRTUAL,
          allowNull: false,
          validate: {
            len: {
              args: [6, 50],
              msg: 'A senha precisa ter entre 6 e 50 caracteres',
            },
          },
        },
      },
      { sequelize: connection }
    );
    User.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
  }
}

module.exports = User;
