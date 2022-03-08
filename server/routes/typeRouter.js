const { Router } = require("express");
const router = new Router();
const typeController = require("../controllers/typeController")

router.post("/",typeController.create); // Метод post для добавления данных в БД
router.get("/", typeController.getAll); // Метод get для получения всех данных из БД

module.exports = router;
