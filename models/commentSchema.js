const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  postId: mongoose.Schema.Types.ObjectId,
  content: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Comment", commentSchema);
