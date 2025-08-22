const Housing = require('../models/Housing')

exports.list = async (req, res) => {
  const housing = await Housing.find()
  res.json(housing)
}
