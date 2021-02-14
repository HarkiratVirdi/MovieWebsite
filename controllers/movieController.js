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
  let movies = movieDatabase.movies;

  if (req.query.filter === "featuredmovies") {
    movies = movies.filter((movie) => {
      return movie.featured;
    });
  } else if (req.query.filter === "byrating") {
    movies = movies.sort((a, b) => {
      return b.rating - a.rating;
    });
  } else if (req.query.filter === "releasedate") {
    movies = movies.sort((a, b) => {
      return b.year - a.year;
    });
  } else if (req.query.filter === "runtime") {
    movies = movies.sort((a, b) => {
      if (a.runtime.includes(":")) {
        runtime1 = a.runtime.split(":");
        runtime1 = parseInt(runtime1[0]) * 60 + parseInt(runtime1[1]);
      } else {
        runtime1 = a.runtime;
      }
      if (b.runtime.includes(":")) {
        runtime2 = b.runtime.split(":");
        runtime2 = parseInt(runtime2[0]) * 60 + parseInt(runtime2[1]);
      } else {
        runtime2 = b.runtime;
      }
      return runtime2 - runtime1;
    });
  } else {
    movies.sort((a, b) => {
      return b.rating - a.rating;
    });
  }

  res.render("list", { movies: movies });
};

module.exports.searchMovie = (req, res) => {
  res.render("search", { movie: movieDatabase.movies });
};
