const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;
const BookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongoose.model("Books", BookSchema);
