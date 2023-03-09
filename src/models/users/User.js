const { getconnection } = require("../setup")
const { UserModel } = require("./UserModel")

module.exports = class User {

  static async findUsers(query = null) {
    try {
      await getconnection()
      let users = await UserModel.find(query, { _id: 0 } || {}).limit(100)
      return users;
    } catch (error) {
      console.log(error.message)
    }
  }
}