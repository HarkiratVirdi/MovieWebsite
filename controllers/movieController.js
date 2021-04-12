const movieModel = require("../models/movieModel");
const { uploadImages } = require("../utils/utils");
const imagesForCarousel = [
  {
    large: "/images/banner/justiceLeagueBanner.jpg",
    comp: "/images/banner/justiceLeagueBanner_edited.jpg",
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
    large: "/images/banner/Arrival_l.jpg",
    comp: "/images/banner/Arrival_l_edited.jpg",
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
  const {cart} = res.locals.user;

   const movieIds = cart.filter(function (el, ind) {
      return ind % 2 === 0;
    })

   movieModel.find(
     {
       _id: {
         $in: movieIds,
       },
     },
     function (err, moviesInCart) {
       res.render("cart", {
         moviesInCart: moviesInCart,
         title: "Mflix | Cart"
       });
     }
   ).lean(); 
  };


module.exports.addMovieToCart = (req, res) => {
  try{
  const {movieId} = req.body;
  const {cart} = req.session.userInfo;

if(cart)
{
  if (cart.indexOf(movieId) === -1 && movieId) {
    cart.push(movieId);
    cart.push("Buy");
  }
  res.json({CartMovies: cart});
}
  }
  catch(err)
  {
    res.json({CartMovies: null});
  }
}

module.exports.updateBuyOrRentInCart = (req, res) => {
  const { cart } = req.session.userInfo;
  const { id, buyOrRent } = req.body;
 

  const index = cart.findIndex((el) => {
    return el === id;
  });


  cart[index + 1] = buyOrRent;

  res.json({updatedCart : cart});
};

module.exports.removeItemFromCart = (req, res) => {
  const {cart} = req.session.userInfo;
  const {movieId} = req.body;

  const index = cart.indexOf(movieId);
  if (index > -1) {
    cart.splice(index, 2);
    res.json({movieId});
  }

}


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
  const { id } = req.params;

  try {
    const movie = await movieModel.findOne({ _id: id }).lean();
    if (movie) {

      res.render("updateMovie", { values: movie });
    }
  } catch (error) {
    console.log("error updating", error);
  }
}

module.exports.updateMovieForm = async(req, res) => {
  const {id} = req.params;

  const {name, rating, rent, buy, genre, year, synopsis, cast1, cast2, cast3, isMovie,studio, runtime, rated, featured} = req.body;

  
const movie = await movieModel.findById(id);


  let imagePoster = movie.img_s;
  let imageBanner = movie.img_l;


  if(req.files)
  {
    if(req.files.img_l)
    {
      imageBanner = "/images/movies/" + req.files.img_l.name;
        await uploadImages(req.files.img_l);
      }
      if(req.files.img_s)
      {
        imagePoster = "/images/movies/" + req.files.img_s.name;
        await uploadImages(req.files.img_s);
    }
  }

  let isFeatured = false;
  if (featured === "Yes") {
    isFeatured = true;
  }

  let isMovieTrue = false;
  if (isMovie === "true") {
    isMovieTrue = true;
  }

let errors = '';

 const castDetails = [
      {name: cast1},
      {name: cast2},
      {name: cast3},
    ]

  try {
  if(movie)
  {
    movie.name = name;
    movie.rating = rating;
    movie.rent = rent;
    movie.buy = buy;
    movie.isMovie = isMovieTrue;
    movie.genre = genre;
    movie.studio = studio;
    movie.img_s = imagePoster;
    movie.img_l = imageBanner;
    movie.runtime = runtime;
    movie.rated = rated;
    movie.featured = isFeatured;
    movie.year = year;
    movie.synopsis = synopsis;
    movie.cast = castDetails;
  }

  const updateMovie = await movie.save();


    if(updateMovie)
    {
      res.redirect("/user/admin");
    }

  } catch (err) {
    console.log("error updateing movie", err);
    errors = "Please fill all the details correctly";

    res.redirect("/user/admin");
  }
}

module.exports.addMovie = (req, res) => {
  res.render("addMovie");
}

module.exports.addMovieForm = async(req, res) => {
  const {name, featured, rating, rent, buy,isMovie, genre, studio, runtime, rated, year, synopsis, cast1, cast2, cast3} = req.body;

  let errors = "";

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
let bannerImage = req.files.img_l;
let posterImage = req.files.img_s;
await uploadImages(bannerImage);
await uploadImages(posterImage);

const bannerPathImage = "/images/movies/" + bannerImage.name; 
const posterPathImage = "/images/movies/" + posterImage.name; 

      const createdMovie = await new movieModel({
        name,
        featured: isFeatured,
        rating,
        rent,
        buy,
        img_s: posterPathImage,
        img_l: bannerPathImage,
        isMovie : isMovieTrue,
        genre,
        studio,
        runtime,
        rated,
        year,
        synopsis,
        cast: [{ name: cast1 }, { name: cast2 }, { name: cast3 }],
      }).save();
      res.redirect("/user/admin");
  } catch (err) {
    errors = "Please fill all the Details";
    console.log("error", err);
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

