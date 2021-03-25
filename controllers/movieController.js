const movieModel = require("../models/movieModel");
const path = require("path");

const imagesForCarousel = [
  {
    large: "/images/banner/theWitcher.jpg",
    comp: "/images/banner/theWitcher_edited.jpg",
  },
  {
    large: "/images/banner/got8.jpg",
    comp: "/images/banner/got8_edited.jpg",
  },
  {
    large: "/images/banner/queenGambit.jpg",
    comp: "/images/banner/queenGambit_edited.jpg",
  },
  {
    large: "/images/banner/wonderWoman.jpg",
    comp: "/images/banner/wonderWoman_edited.jpg",
  },
  {
    large: "/images/banner/arrival.jpg",
    comp: "/images/banner/arrival_edited.jpg",
  },
];

const searchForMovies = {
  _id: 1,
  name: 1,
  img_s_C: 1,
  img_s: 1,
  img_l: 1,
  img_l_C: 1,
  genre: 1,
  buy: 1,
  featured: 1,
  isMovie: 1,
  rating: 1,
  year: 1,
  runtime: 1,
};

module.exports.getMovies = async (req, res) => {
  try {
    const getAllMovies = await movieModel.find({},searchForMovies).lean();

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
        }, searchForMovies)
        .lean();


          // const getReviews = await axios.get(
            // `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie.name}&api-key=${process.env.NYTIMESAPI}`
          // );

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
      let movies = await movieModel
        .find(
          {},
         searchForMovies
        )
        .lean();

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

  console.log("req.body in add movie", req.body);
  console.log(req.files);

  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let sampleFile = req.files.img_l;
  let sampleFile2 = req.files.img_s;
  
  console.log("samaple file 1", sampleFile);
  console.log("samaple file 2", sampleFile2);

  // uploadPath = path.join(__dirname, "../public", "/images", "/movies", "/", sampleFile.name);
uploadPath = "/images/movies/" + sampleFile.name;
uploadPath2 = "/images/movies/" + sampleFile2.name;

  sampleFile.mv("public" + uploadPath, function (err) {
    if (err) console.log("error uploading file 1");
    console.log("File 1 uploaded!");
  });

  sampleFile2.mv("public" + uploadPath2, function (err) {
    if (err) console.log("error uploading file 2");
    console.log("File 2 uploaded!");
  });

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
        img_s: uploadPath2,
        img_l: uploadPath,
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

    res.render("addMovie", {
      values: req.body,
      errors: errors,
      title: "MFlix | Add Movie",
    })
  }
}

module.exports.deleteMovie = async(req, res) => {
  const {id} = req.params;

  try {
     await movieModel.deleteOne({_id: id});
      res.redirect("/user/admin");
  } catch (err) {
      console.log("error", err);
  }
}

module.exports.searchMovie = async (req, res) => {
  const {searchTerm} = req.body;

 try{
   const findMovies = await movieModel.find({name: {$regex: searchTerm, $options: 'i'}}, searchForMovies)

  if(findMovies)
  {
    res.json({data: findMovies})
  }

 }catch(e)
 {
  console.log("error", e);
 }
};
