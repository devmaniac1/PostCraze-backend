const Post = require("../models/postSchema");

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
    const post = await Post.find({ _id: postId });
    res.json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getPosts, createPost, getPostsbyId };
