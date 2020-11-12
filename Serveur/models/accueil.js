const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accueilSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Accueil", accueilSchema);
