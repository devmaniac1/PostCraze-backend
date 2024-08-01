require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const postRoutes = require("./routes/postsRoute");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.json({ status: 200 });
});

app.use(bodyParser.json());
app.use(cors());

const mongoDB =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@postcraze.jcgy6fc.mongodb.net/?retryWrites=true&w=majority&appName=postcraze`;

app.use("/posts", postRoutes);

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
