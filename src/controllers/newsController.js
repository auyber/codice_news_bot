const News = require("../models/News");

const getAll = async (req, res) => {
    try{
        const news = await News.findAll()
        res.json(news)
    } catch (err){
        res.status(500).json({ error: "Failed to fetch news"});
    }
};

const create = async (req, res) => {
    try{
        const createdNews = await News.create(req.body);
        res.status(201).json(createdNews);
    } catch (err){
        res.status(500).json({ error: "Failed to create news" })
    }
}

module.exports = { getAll, create };