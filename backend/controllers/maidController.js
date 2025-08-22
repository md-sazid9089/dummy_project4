const Maid = require('../models/Maid')

exports.list = async (req, res) => {
  const maids = await Maid.find()
  res.json(maids)
}
