const express = require("express");
const {
  getPosts,
  createPost,
  getPostsbyId,
  addCommentToPost,
} = require("../controllers/postsController");

const router = express.Router();

router.route("/getPosts").get(getPosts);
router.route("/:postId").get(getPostsbyId);
router.route("/createPost").post(createPost);
router.route("/:postId/comments").post(addCommentToPost);

module.exports = router;
