const express = require("express");
const router = express.Router();
const {
  getMovies,
  getMovie,
  getMovieList,
  getInput,
  searchMovie,
} = require("../controllers/movieController");

router.route("/").get(getMovies);
router.route("/list").get(getMovieList);
router.route("/list/:id").get(getMovie);
router.route("/search").get(searchMovie);

module.exports = router;
