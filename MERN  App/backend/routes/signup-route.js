const Express = require("express");
const signup = require("../controllers/signup-controller");
const router = Express.Router();

router.post("/signup", signup);

module.exports = router;
