const express = require("express");
const {
  loginUser,
  registerUser,
  signIn,
  signUp,
  dashboard,
} = require("../controllers/userController");
const router = express.Router();

router.route("/dashboard").get(dashboard);
router.route("/login").get(loginUser).post(signIn);
router.route("/register").get(registerUser).post(signUp);

module.exports = router;
