const express = require('express');

const router = express.Router();

const { store, index } = require('../controllers/User');

router.post('/users', store);
router.get('/users', index);

module.exports = router;
