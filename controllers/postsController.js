const Post = require("../models/postSchema");
const { body, validationResult } = require('express-validator');

const validateCreatePost = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
];

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getPostsbyId = async (req, res) => {
  try {

    // console.log(req.params.postId);
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    res.json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, content, color } = req.body;


  const newPost = new Post({
    title,
    content,
    color,
    comments: [],
  });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const addCommentToPost = async (req, res) => {
  const { postId } = req.params;
  const { comment } = req.body;
  const newComment = {
    comment,
    createdAt: new Date(),
  };
  try {
    const result = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: newComment } },
      { new: true }
    );
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};

module.exports = { getPosts, createPost, getPostsbyId, addCommentToPost,validateCreatePost };
