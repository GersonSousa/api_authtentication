/* eslint-disable camelcase */
const User = require('../models/User');

// @descrição
// @rota
// @acesso

const store = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    user.password = undefined;

    return res.status(200).json(user);
  } catch (e) {
    return res.status(401).json(e.errors.map((erro) => erro.message));
  }
};

const index = async (req, res) => {
  try {
    const user = await User.findAll();

    user.password = undefined;

    return res.status(200).json({ Usuários: user });
  } catch (error) {
    return res.json(error);
  }
};

module.exports = { store, index };
