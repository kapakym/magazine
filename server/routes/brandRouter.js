const { Router } = require("express");
const router = new Router();
const brandController = require("../controllers/brandController")

router.post("/", brandController.create); // Метод post для добавления данных в БД
router.get("/", brandController.getAll); // Метод get для получения всех данных из БД

module.exports = router;
