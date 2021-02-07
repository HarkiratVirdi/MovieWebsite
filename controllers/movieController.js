const movieDatabase = require("../db/db");
const imagesForContent = [
  "https://images2.vudu.com/poster2/1576343-168",
  "https://images2.vudu.com/assets/content/poster/1493460-144",
  "https://images2.vudu.com/assets/content/poster/1598398-144",
  "https://images2.vudu.com/assets/content/poster/1503232-144",
  "https://images2.vudu.com/assets/content/poster/730488-144",
];

module.exports.getMovies = (req, res) => {
  console.log(movieDatabase);
  res.render("index", {
    movies: movieDatabase.movies,
    images: imagesForContent,
  });
};

module.exports.getMovie = (req, res) => {
  res.render("details");
};

module.exports.getMovieList = (req, res) => {
  res.render("list", { movies: movieDatabase.movies });
};

module.exports.searchMovie = (req, res) => {
  res.render("search");
};
