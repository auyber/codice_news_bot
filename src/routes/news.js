const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("News route working!")
});

module.exports = router