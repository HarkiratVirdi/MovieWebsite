const express = require("express");
const { loginUser } = require("../controllers/userController");
const { route } = require("./movieRoutes");
const router = express.Router();

router.route("/").get(loginUser);

module.exports = router;
