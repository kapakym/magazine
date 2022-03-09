const { Router } = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), typeController.create); // Метод post для добавления данных в БД
router.get("/", typeController.getAll); // Метод get для получения всех данных из БД
router.delete("/:id", typeController.delete)

module.exports = router;
