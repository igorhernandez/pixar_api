const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  name: String,
  avatar_url: String,
  bio: String,
  movie: String,
});

module.exports = mongoose.model("Character", CharacterSchema);
