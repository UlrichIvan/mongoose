const { Router } = require("express")
const router = Router()

const UsersController = require("../controllers/UsersController")

try {
  router.post(process.env.URL_ORDERS, UsersController)
} catch (error) {
  console.log(error.message, process.env.URL_ORDERS)
}


module.exports = router