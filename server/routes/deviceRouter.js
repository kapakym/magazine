const { Router } = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController")

router.post("/", deviceController.create); // Метод post для добавления данных в БД
router.get("/", deviceController.getAll); // Метод get для получения всех данных из БД
router.get("/:id", deviceController.getOne); // Получить данные на конкретное устройство

module.exports = router;
