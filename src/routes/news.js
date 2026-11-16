const express = require("express");
const router = express.Router();
const { getAll, getAllArticles } = require("../controllers/newsController")

router.get("/", getAllArticles);

module.exports = router