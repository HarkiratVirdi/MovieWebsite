const express = require("express");
const router = express.Router();
const {
  getMovies,
  getMovie,
  getMovieList,
  cart
} = require("../controllers/movieController");
const authUser = require("../middleware/authUser");

router.route("/").get(getMovies);
router.route("/list").get(getMovieList);
router.route("/list/:id").get(getMovie);
router.route("/cart").get(authUser,cart);
// router.route("/search").get(searchMovie);

module.exports = router;
