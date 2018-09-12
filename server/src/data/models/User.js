const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
   id: String,
   email: String,
   password: String,
   isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model("User", User);
