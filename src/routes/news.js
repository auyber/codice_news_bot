const express = require("express");
const router = express.Router();
const { getAll, create } = require("../controllers/newsController")

router.get("/", getAll);
router.post("/", create);

module.exports = router