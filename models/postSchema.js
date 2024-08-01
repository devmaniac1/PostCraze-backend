const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  comment: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  comments: [commentSchema],
  color: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const post = mongoose.model("Post", postSchema);

module.exports = post;
