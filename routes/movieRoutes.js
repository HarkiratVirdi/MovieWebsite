const express = require("express");
const router = express.Router();
const {
  getMovies,
  getMovie,
  getMovieList,
  cart,
  updateMovie,
  deleteMovie,
  addMovieForm,
  searchMovie,
  purchaseMovie,
  updateMovieForm,
  addMovie
} = require("../controllers/movieController");
const adminUser = require("../middleware/adminUser");
const authUser = require("../middleware/authUser");

router.route("/").get(getMovies);
router.route("/list").get(getMovieList);
router.route("/list/:id").get(getMovie);
router.route("/cart").get(authUser,cart);
router.route("/search").post(searchMovie);
router.route("/purchase/:id").get(purchaseMovie);
router.route("/updateMovie/:id").get(authUser, adminUser, updateMovie).post(authUser, adminUser, updateMovieForm);
router
  .route("/addMovie")
  .get(authUser, adminUser, addMovie)
  .post(authUser, adminUser, addMovieForm);
router.route("/deleteMovie/:id").get(authUser, adminUser, deleteMovie);

module.exports = router;
