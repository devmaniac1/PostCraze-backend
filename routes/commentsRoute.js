const express = require("express");
const {
  getComments,
  createComment,
} = require("../controllers/commentsController");

const router = express.Router();

router.route("/:postId").get(getComments);
router.route("/").post(createComment);

module.exports = router;
