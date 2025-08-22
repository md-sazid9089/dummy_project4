const Shop = require('../models/Shop')

exports.list = async (req, res) => {
  const shops = await Shop.find()
  res.json(shops)
}
