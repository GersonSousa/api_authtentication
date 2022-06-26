const express = require('express');

const router = express.Router();

const { index, login, logout } = require('../controllers/Auth');

router.get('/', index);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
