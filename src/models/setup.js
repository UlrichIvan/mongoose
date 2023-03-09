const { default: mongoose } = require("mongoose");
const options = { useNewUrlParser: true, useUnifiedTopology: true }

const getconnection = async (dbName = "store") => {
  try {
    const db = await mongoose.connect(`${process.env.URL_MONGO_DB}/${dbName}`, options)
    return db
  } catch (error) {
    throw new Error(error.message)
  }
}

const disconnect = () => {
  if (mongoose.connection.readyState > 0) {
    forcedisconnect()
  }
}

const forcedisconnect = (cb) => {
  mongoose.connection.close()
    .then(() => cb())
    .catch(err => console.log(err.message))
}
module.exports = { disconnect, getconnection, forcedisconnect }