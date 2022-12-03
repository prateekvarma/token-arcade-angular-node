const express = require('express');

const transactionsController = require('../controllers/transactions');

const router = express.Router();

router.post('/buy-tokens',transactionsController.buyToken);

router.post('/get-game', transactionsController.getGame);

module.exports = router;