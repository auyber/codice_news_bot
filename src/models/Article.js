const { DataTypes } = require("sequelize");
const sequelize = require("../database")

const Article = sequelize.define("Article", {
    guid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    summary: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: ''
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'NEWS'
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    publishedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'articles',
    timestamps: true
})

module.exports = Article