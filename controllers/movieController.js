const movieModel = require("../models/movieModel");
const axios = require("axios");

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


          const getReviews = await axios.get(
            `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie.name}&api-key=${process.env.NYTIMESAPI}`
          );

      let reviews = "";
      if (getReviews.data.status === "OK") {
      reviews = getReviews.data.results;
      } else {
      reviews = [];
      }

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

module.exports.updateMovie = async(req, res) => {
  const {id} = req.params;
  console.log("movie ID", id);
}

module.exports.addMovie = (req, res) => {
  res.render("addMovie");
}

module.exports.addMovieForm = async(req, res) => {
  const {name, featured, rating, rent, buy, img_s, img_l, isMovie, genre, studio, runtime, rated, year, synopsis, cast1, cast2, cast3} = req.body;

  console.log("cast1", cast1);
  console.log("cast2", cast2);
  console.log("cast3", cast3);
  console.log("name", name);
  console.log("featured", featured);
  console.log("rating", rating);
  console.log("rent", rent);
  console.log("buy", buy);
  console.log("img_s", img_s);
  console.log("img_l", img_l);
  console.log("isMovie", isMovie);
  console.log("genre", genre);
  console.log("studio", studio);
  console.log("runtime", runtime);
  console.log("rated", rated);
  console.log("year", year);
  console.log("synopsis", synopsis);
  

  let isFeatured = false;
  if(featured === "Yes")
  {
    isFeatured = true;
  }

  let isMovieTrue = false;
  if(isMovie === "true")
  {
    isMovieTrue = true;
  }


  try {
      const createdMovie = await new movieModel({
        name,
        featured: isFeatured,
        rating,
        rent,
        buy,
        img_s,
        img_l,
        isMovie : isMovieTrue,
        genre,
        studio,
        runtime,
        rated,
        year,
        synopsis,
        cast: [{ name: cast1 }, { name: cast2 }, { name: cast3 }],
      }).save();
      console.log("saved new movie", createdMovie);
      res.redirect("/user/admin");
  } catch (err) {
    console.log("error adding Movie", err);

    res.render("addMovie", {
      values: req.body,
      errors: errors,
      title: "MFlix | Add Movie",
    })
  }
}

module.exports.deleteMovie = async(req, res) => {
  const {id} = req.params;
  console.log("delete movie ID", id);

  try {
      const deleteMovie = await movieModel.deleteOne({_id: id});
      console.log("movie deleted", deleteMovie);
      res.redirect("/user/admin");
  } catch (err) {
      console.log("error", err);
  }
}

module.exports.searchMovie = async (req, res) => {
  const {searchTerm} = req.body;

 try{
   const findMovies = await movieModel.find({name: {$regex: searchTerm, $options: 'i'}})

  if(findMovies)
  {
    res.json({data: findMovies})
  }

 }catch(e)
 {
  console.log("error", e);
 }


};
