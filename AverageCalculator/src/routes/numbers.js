const express = require('express');
const { getNumbers } = require('../controllers/numbersController');

const router = express.Router();

router.get('/:numberid', getNumbers);

module.exports = router;