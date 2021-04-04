const express = require("express");
const {
  loginUser,
  registerUser,
  signIn,
  signUp,
  logout,
  dashboard,
  deleteUser,
  adminDashboard,
  deleteUserPage,
  checkout,
  updateUserPage,
  updateUser,
  payment,
  getOrders
} = require("../controllers/userController");
const authUser = require("../middleware/authUser");
const adminUser = require("../middleware/adminUser");
const cartDetails = require("../middleware/cartDetails");
const router = express.Router();

router.route("/dashboard").get(authUser, dashboard);
router.route("/login").get(loginUser).post(signIn);
router.route("/register").get(registerUser).post(signUp);
router.route("/logout").get(authUser,logout);
router.route("/delete").get(authUser, deleteUserPage).delete(authUser, deleteUser);
router.route("/update").get(authUser, updateUserPage).post(authUser, updateUser);
router.route("/admin").get(authUser, adminUser, adminDashboard);
module.exports = router;

router.route("/orders").get(authUser,getOrders);
router.route("/checkout").get(authUser, cartDetails, checkout);
router.route("/payment").post(authUser,cartDetails, payment);

