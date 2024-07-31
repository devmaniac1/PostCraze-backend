const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const post = mongoose.model("Post", postSchema);

module.exports = post;
