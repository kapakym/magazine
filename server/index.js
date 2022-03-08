require("dotenv").config();

const express = require("express"); //подключение framework Express
const sequelize = require("./db"); //Подключение к БД
const models = require("./models/models"); // Подключение шаблонов моделей БД
const cors = require("cors"); // Покдлючение CORS
const fileUpload = require('express-fileupload');
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload({}))
app.use("/api", router);

// Обработка ошибки, последний Mid dleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
