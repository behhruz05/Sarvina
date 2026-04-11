const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  img: String,
  title: String,
  description: String,
  date: String
});

module.exports = mongoose.model("News", newsSchema);