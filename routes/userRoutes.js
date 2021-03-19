const express = require("express");
const {
  loginUser,
  registerUser,
  signIn,
  signUp,
  logout,
  dashboard,
} = require("../controllers/userController");
const authUser = require("../middleware/authUser");
const router = express.Router();

router.route("/dashboard").get(authUser, dashboard);
router.route("/login").get(loginUser).post(signIn);
router.route("/register").get(registerUser).post(signUp);
router.route("/logout").get(authUser,logout);
module.exports = router;
