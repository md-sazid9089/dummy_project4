const mongoose = require('mongoose')

const housingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rent: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true }
})

module.exports = mongoose.model('Housing', housingSchema)
