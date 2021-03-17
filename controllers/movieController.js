const movieModel = require("../models/movieModel");

const imagesForCarousel = [
  "/images/banner/theWitcher.jpg",
  "/images/banner/got8.jpg",
  "/images/banner/queenGambit.jpg",
  "/images/banner/wonderWoman.jpg",
  "/images/banner/arrival.jpg",
];

module.exports.getMovies = async (req, res) => {
  try {
    const getAllMovies = await movieModel.find().lean();

    if (getAllMovies) {
      res.render("index", {
        movies: getAllMovies,
        imagesForCarousel: imagesForCarousel,
        title: "MFlix | Buy Movies",
      });
    }
  } catch (err) {
    console.log("error ", err);
  }
};

module.exports.getMovie = async (req, res) => {
  // const getReviews = await axios.get(
  //   `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie[0].name}&api-key=${process.env.NYTIMESAPI}`
  // );
  try {
    let movie = await movieModel.findById(req.params.id).lean();

    if (movie) {
      const recommended = await movieModel
        .find({
          genre: movie.genre,
          isMovie: movie.isMovie,
          name: { $ne: movie.name },
        })
        .lean();

      let reviews = "";
      // if (getReviews.data.status === "OK") {
      // reviews = getReviews.data.results;
      // } else {
      // reviews = [];
      // }

      res.render("details", {
        movie: movie,
        reviews: reviews,
        recommended: recommended,
        title: "MFlix | " + movie.name,
      });
    }
  } catch (error) {
    console.log("err", error);
  }
};

module.exports.cart = (req, res) => {
  res.render("cart");
};

module.exports.getMovieList = async (req, res) => {
  try {
    let movies = await movieModel.find().lean();

    if (movies) {
      if (req.query.filter === "byrating") {
        movies = movies.sort((a, b) => {
          return b.rating - a.rating;
        });
      } else if (req.query.filter === "movies") {
        movies = movies.filter((item) => {
          return item.isMovie === true;
        });
      } else if (req.query.filter === "series") {
        movies = movies.filter((item) => {
          return item.isMovie === false;
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

      res.render("list", {
        movies: movies,
        title: "MFlix | Movie List",
      });
    }
  } catch (error) {
    console.log("error", error);
  }
};

// module.exports.searchMovie = (req, res) => {
//   res.render("search", { movie: movieDatabase.movies });
// };
