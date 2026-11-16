const Article = require("../models/Article");

const getAllArticles = async (req, res) => {
    try{
        const articles = await Article.findAll()
        res.json(articles)
    } catch (err){
        res.status(500).json({ error: "Failed to fetch articles"});
    }
};

module.exports = {getAllArticles};