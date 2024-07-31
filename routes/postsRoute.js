const express = require("express");
const {
  getPosts,
  createPost,
  getPostsbyId,
} = require("../controllers/postsController");

const router = express.Router();

router.route("/getPosts").get(getPosts);
router.route("/:postId").get(getPostsbyId);
router.route("/createPost").post(createPost);

module.exports = router;
