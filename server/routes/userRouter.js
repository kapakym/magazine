const { Router } = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router.post("/registration", userController.registration); // Метод post для регистрации пользователя
router.post("/login", userController.login); // Метод post для входа в личный кабинет
router.get("/auth", userController.check); // Метод get проверки авторизован пользователь или нет

module.exports = router;
