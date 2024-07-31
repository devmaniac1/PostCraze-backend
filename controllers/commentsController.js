const Comment = require("../models/commentSchema");

exports.getComments = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await Comment.find({ postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createComment = async (req, res) => {
  const comment = req.body;
  const newComment = new Comment(comment);
  try {
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
