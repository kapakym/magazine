const { Router } = require("express");
const router = new Router();

router.post("/"); // Метод post для добавления данных в БД
router.get("/"); // Метод get для получения всех данных из БД

module.exports = router;
