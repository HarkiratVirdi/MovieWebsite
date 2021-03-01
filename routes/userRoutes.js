const express = require("express");
const {
  loginUser,
  registerUser,
  signIn,
  signUp,
} = require("../controllers/userController");
const router = express.Router();

router.route("/login").get(loginUser).post(signIn);
router.route("/register").get(registerUser).post(signUp);

module.exports = router;
