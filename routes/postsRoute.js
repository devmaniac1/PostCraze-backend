const express = require("express");
const { getPosts, createPost } = require("../controllers/postsController");

const router = express.Router();

router.route("/getPosts").get(getPosts);
router.route("/createPost").post(createPost);

module.exports = router;
