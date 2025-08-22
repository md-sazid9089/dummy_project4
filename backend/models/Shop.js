const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
})

module.exports = mongoose.model('Shop', shopSchema)
