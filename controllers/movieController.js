const movieDatabase = require("../db/db");
const imagesForContent = [
  "https://images2.vudu.com/poster2/1576343-168",
  "https://images2.vudu.com/assets/content/poster/1493460-144",
  "https://images2.vudu.com/assets/content/poster/1598398-144",
  "https://images2.vudu.com/assets/content/poster/1503232-144",
  "https://images2.vudu.com/assets/content/poster/730488-144",
];
const imagesForCarousel = [
  "https://m.media-amazon.com/images/M/MV5BNGIzNWI4MjQtZWI4Zi00N2U4LTg1MWMtNmRmYmIxOWVjZTkwXkEyXkFqcGdeQWFybm8@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNWMxOGUxN2MtMTBiMi00MWM3LTgzZTItZTYwZTZmYTQ0ZjQ0XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZmE1ZTgwZTEtMzU3YS00MWYzLTk3NzctZDMwZjQxNmRhMGY0XkEyXkFqcGdeQWFybm8@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTFhOGJjZjUtOWM4Ny00ZWE0LWFlMDUtMDAyMTc2MTcxMmM3XkEyXkFqcGdeQWFybm8@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDI0NmYxZmMtN2EyNi00YzMwLTgzNWEtYjY4NmIxMjlmMzJhXkEyXkFqcGdeQXVyNzE3ODQxNjU@._CR212,55,777,437.jpg",
];

module.exports.getMovies = (req, res) => {
  res.render("index", {
    movies: movieDatabase.movies,
    images: imagesForContent,
    imagesForCarousel: imagesForCarousel,
  });
};

module.exports.getMovie = (req, res) => {
  console.log(req.params.id);

  const movie = movieDatabase.movies.filter((movie) => {
    return movie.id === parseInt(req.params.id);
  });

  console.log(movie);
  res.render("details", { movie: movie[0] });
};

module.exports.getMovieList = (req, res) => {
  res.render("list", { movies: movieDatabase.movies });
};

module.exports.searchMovie = (req, res) => {
  res.render("search");
};
