const User = require("../models/users/User")
module.exports = async (_, res) => {
  // let body = req.body
  try {
    let users = await User.findUsers()
    res.json(users)
  } catch (error) {
    console.log(error.message)
  }
}