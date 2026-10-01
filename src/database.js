const {Sequelize} = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

sequelize.authenticate()
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log("Connection error:", err))

module.exports = sequelize