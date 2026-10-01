const { DataTypes } = require("sequelize");
const sequelize = require("../database")

const News = sequelize.define("News", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
        },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
        },
    summary: {
        type: DataTypes.STRING,
        allowNull: false
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publishedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

module.exports = News