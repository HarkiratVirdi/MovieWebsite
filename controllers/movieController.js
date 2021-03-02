const movieDatabase = require("../db/db");
// const axios = require("axios");

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
    title: "MovieNation | Buy Movies",
  });
};

module.exports.getMovie = async (req, res) => {
  const movie = movieDatabase.filterMovie(req.params.id);

  // const getReviews = await axios.get(
  //   `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie[0].name}&api-key=${process.env.NYTIMESAPI}`
  // );
  const recommended = movieDatabase.movies.filter((item) => {
    return (
      movie[0].genre[0] === item.genre[0] &&
      movie[0].name !== item.name &&
      movie[0].isMovie === item.isMovie
    );
  });

  let reviews = "";
  // if (getReviews.data.status === "OK") {
  // reviews = getReviews.data.results;
  // } else {
  // reviews = [];
  // }

  res.render("details", {
    movie: movie[0],
    reviews: reviews,
    recommended: recommended,
    title: "MovieNation | " + movie[0].name,
  });
};

module.exports.getMovieList = (req, res) => {
  let movies = movieDatabase.movies;

  // if (req.query.filter === "featuredmovies") {
  //   movies = movies.filter((movie) => {
  //     return movie.featured;
  //   });
  if (req.query.filter === "byrating") {
    movies = movies.sort((a, b) => {
      return b.rating - a.rating;
    });
  } else if(req.query.filter === 'movies')
  {
    movies = movies.filter((item) => {
      return item.isMovie === true;
    })
  }
   else if(req.query.filter === 'series')
  {
    movies = movies.filter((item) => {
      return item.isMovie === false;
    })
  }  
  else if (req.query.filter === "releasedate") {
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

  res.render("list", {
    movies: movies,
    title: "MovieNation | Movie List",
  });
};

// module.exports.searchMovie = (req, res) => {
//   res.render("search", { movie: movieDatabase.movies });
// };
