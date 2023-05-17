const Express = require("express");
const login = require("../controllers/login-controller");
const router = Express.Router();

router.post("/login", login);
console.log("ok2");
module.exports = router;
