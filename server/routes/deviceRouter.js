const { Router } = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), deviceController.create); // Метод post для добавления данных в БД
router.get("/", deviceController.getAll); // Метод get для получения всех данных из БД
router.get("/:id", deviceController.getOne); // Получить данные на конкретное устройство

module.exports = router;
