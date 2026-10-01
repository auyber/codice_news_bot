const express = require("express");
const app = express();
const newsRouter = require("./src/routes/news");
const carouselRouter = require("./src/routes/carousel");
const db = require("./src/database")

app.get("/", (req, res) => {
  res.send("Hello World!")
});

app.use("/news", newsRouter);
app.use("/carousel", carouselRouter);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})