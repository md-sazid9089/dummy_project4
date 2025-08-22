const express = require('express')
const router = express.Router()
const maidController = require('../controllers/maidController')

router.get('/', maidController.list)

module.exports = router
