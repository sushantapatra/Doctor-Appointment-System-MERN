const express = require("express");
const {
	loginController,
	registerController,
	authController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);
//REGISTER || POST
router.post("/register", registerController);
//Auth (getuserdata with middleware) || POST
router.post("/getuser", authMiddleware, authController);
module.exports = router;
