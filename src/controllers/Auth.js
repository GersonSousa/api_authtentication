const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
/* eslint-disable camelcase */
const User = require('../models/User');

const login = async (req, res) => {
  try {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais vazias'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    if (!(await bcrypt.compare(password, user.password_hash))) {
      return res.status(400).json({ Erros: ['Senha inválida'] });
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_TIME,
    });

    return res.status(200).json({ userToken: token });
  } catch (error) {
    return res.json('algo de errado não esta certo');
  }
};

const logout = async (req, res) => {
  res.send('oi2');
};

module.exports = { login, logout };
