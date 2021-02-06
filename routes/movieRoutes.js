const express = require("express");
const router = express.Router();
const {
  getMovies,
  getMovie,
  getMovieList,
} = require("../controllers/movieController");

router.route("/").get(getMovies);
router.route("/list").get(getMovieList);
router.route("/list/:id").get(getMovie);

module.exports = router;
