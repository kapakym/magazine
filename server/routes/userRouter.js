const { Router } = require("express");
const router = new Router();

router.post("/registration"); // Метод post для регистрации пользователя
router.get("/login"); // Метод post для входа в личный кабинет
router.get("/auth", (req, res) => {
  res.json({ message: "auth" });
}); // Метод get проверки авторизован пользователь или нет

module.exports = router;
