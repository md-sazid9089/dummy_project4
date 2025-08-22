const mongoose = require('mongoose')

const maidSchema = new mongoose.Schema({
  name: { type: String, required: true },
  service: { type: String, required: true },
  contact: { type: String, required: true }
})

module.exports = mongoose.model('Maid', maidSchema)
