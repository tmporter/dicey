const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Game = new Schema({
   id: String,
   title: String,
   // todo: link the author field to a user record
   author: String,
   description: String,
   thumbnail: String,
   file: Buffer
   // todo: tags
});

module.exports = mongoose.model("Game", Game);
