const express = require('express');

const router = express.Router();

const { store, meuPainel } = require('../controllers/User');
const { authorization } = require('../middlewares/loginRequired');

router.post('/users', store);
router.get('/meu-painel', authorization, meuPainel);

module.exports = router;
