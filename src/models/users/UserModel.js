const mongoose = require("mongoose")

// user Schema
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  id_state: {
    type: Number,
    required: true
  },
  lastname: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  firstname: {
    type: String,
    require: true,
    lowercase: true,
    trim: true
  },
  phone: String,
  date_upd: Date,
}, {
  collection: "users"
})

module.exports.UserModel = mongoose.model("users", UserSchema)