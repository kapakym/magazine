const {Sequelize} = require("sequelize");
// require("dotenv").config();

module.exports = new Sequelize(
    process.env.DB_NAME, // Имя базы данных
    process.env.DB_USER, // Имя пользователя
    process.env.DB_PASSWORD, // Паролья для доступа к БД
    {
        dialect:"postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)