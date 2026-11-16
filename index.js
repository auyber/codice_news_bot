const express = require("express");
const app = express();
const newsRouter = require("./src/routes/news");
const carouselRouter = require("./src/routes/carousel");
const db = require("./src/database")
const Article = require("./src/models/Article");

app.get("/", (req, res) => {
  res.send("Hello World!")
});

app.use(express.json())
app.use("/news", newsRouter);
app.use("/carousel", carouselRouter);
Article.sync()
  .then(() => console.log("Article Synchronized"))
  .catch((err) => console.log("Connection error: ", err))

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})