const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const postRoutes = require("./routes/postsRoute");
const commentRoutes = require("./routes/commentsRoute");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.json({ status: 200 });
});

app.use(bodyParser.json());
app.use(cors());

const mongoDB =
  "mongodb+srv://ashfaq:NPIyzdBVvdkLoMI7@postcraze.jcgy6fc.mongodb.net/?retryWrites=true&w=majority&appName=postcraze";

app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

// console.log(postRoutes);
mongoose
  .connect(mongoDB)
  .then(() => {
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("connected");
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
