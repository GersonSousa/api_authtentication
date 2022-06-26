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

const meuPainel = async (req, res) => {
  res.render('Colaborador/meu-painel', {
    PageTitle: 'Allrede Telecom - Meu painel',
    textTop: 'Meu Painel',
    nome: 'Antonio Gerson de Sousa Silva',
    emoji: '😊',
    rank: '1º',
  });
};

module.exports = { store, meuPainel };
