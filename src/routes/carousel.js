const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("carousel route working!")
});

module.exports = router