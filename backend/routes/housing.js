const express = require('express')
const router = express.Router()
const housingController = require('../controllers/housingController')

router.get('/', housingController.list)

module.exports = router
