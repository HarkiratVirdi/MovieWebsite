// const mongoose = require("mongoose");

// const movieSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   featured: {
//     type: Boolean,
//     required: true,
//     default: false,
//   },
//   rating: {
//     type: Number,
//     required: true,
//   },
//   rent: {
//     type: Number,
//     required: true,
//   },
//   buy: {
//     type: Number,
//     required: this,
//   },
//   img_s: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   img_l: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   isMovie: {
//     type: Boolean,
//     required: true,
//     default: true,
//   },
//   genre: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   studio: {
//     type: String,
//     trim: true,
//     required: false,
//   },
//   runtime: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   rated: {
//     type: String,
//     trim: true,
//     required: false,
//     default: "PG-13",
//   },
//   year: {
//     type: Number,
//     required: false,
//   },
//   synopsis: {
//     type: String,
//     trim: true,
//     required: true,
//     default: this.name + " is a movie with rating " + this.rating,
//   },
//   trailer_link: {
//     type: String,
//     required: false,
//     trim: true,
//   },
//   movie_link: {
//     type: String,
//     required: false,
//     trim: true,
//   },
// });

// const Movie = mongoose.model("Movie", movieSchema);

// module.exports = Movie;
