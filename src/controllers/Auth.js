const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
/* eslint-disable camelcase */
const User = require('../models/User');

const index = (req, res) => {
  res.render('Auth/login', {
    PageTitle: 'Allrede Telecom - Login',
  });
};

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
    const { id, name } = user;
    const token = jwt.sign({ id, email, name }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_TIME,
    });

    return res
      .cookie('userToken', token, {
        httpOnly: true,
      })
      .redirect('meu-painel');
  } catch (error) {
    return res.json('algo de errado não esta certo');
  }
};
const logout = (req, res) => {
  try {
    return res.clearCookie('userToken').redirect('/v1');
  } catch (err) {
    return res.status(400).json({ msg: 'houver um erro' });
  }
};

module.exports = { index, login, logout };
