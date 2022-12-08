const express = require('express')
const router = express.Router()
const coinController = require('../coinController/coinData')

router.get('/coindata', coinController.coinData)

module.exports = router;