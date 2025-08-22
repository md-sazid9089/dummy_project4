const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shopController')

router.get('/', shopController.list)

module.exports = router
