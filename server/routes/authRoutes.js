const {Router} = require("express");
const router = Router();

const { register, login } = require('../controllers/authControllers');


router.post("/signup", register)
router.post("/signin", login)

module.exports = router;