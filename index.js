require("dotenv").config()

const express = require("express")
const closedbconnection = require("./src/middlewares/closedbconnection")
const { forcedisconnect } = require("./src/models/setup")
const app = express()
const router = require("./src/routers/router")
const eventsProcess = ["SIGINT", "SIGTERM"]

// close session of database if nodejs process ends
eventsProcess.forEach(event => {
  process.on(event, () => {
    console.log('process ends')
    forcedisconnect(() => process.exit(0))
  })
});

// allow content-type of requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// close database connetion after each request
app.use(closedbconnection)

// init routes
app.use(router)

// run server on specifics port
app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}.`))