const { disconnect } = require("../models/setup")

module.exports = (_, res, next) => {
  res.on('finish', () => disconnect())
  res.on('close', () => disconnect())
  next()
}