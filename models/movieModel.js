const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  buy: {
    type: Number,
    required: this,
  },
  img_s: {
    type: String,
    trim: true,
    required: true,
  },
  img_l: {
    type: String,
    required: true,
    trim: true,
  },
  isMovie: {
    type: Boolean,
    required: true,
    default: true,
  },
  genre: {
    type: String,
    trim: true,
    required: true,
  },
  studio: {
    type: String,
    trim: true,
    required: false,
  },
  runtime: {
    type: String,
    trim: true,
    required: true,
  },
  rated: {
    type: String,
    trim: true,
    required: false,
    default: "PG-13",
  },
  featured: {
    type: Boolean,
    default: false,
  },
  year: {
    type: Number,
    required: false,
  },
  synopsis: {
    type: String,
    trim: true,
    required: true,
    default: this.name + " is a movie with rating " + this.rating,
  },
  cast: [{
    name: {
        type: String,
    },
    name: {
        type: String,
    },
    name: {
        type: String,
    }
  }]
});

const movieModel = mongoose.model("Movie", movieSchema);

module.exports = movieModel;
