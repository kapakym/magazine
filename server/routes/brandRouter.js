const { Router } = require("express");
const router = new Router();
const brandController = require("../controllers/brandController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), brandController.create); // Метод post для добавления данных в БД
router.get("/", brandController.getAll); // Метод get для получения всех данных из БД

module.exports = router;
