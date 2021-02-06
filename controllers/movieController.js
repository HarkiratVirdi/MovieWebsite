const express = require("express");
const movieDatabase = require("../db/db");

module.exports.getMovies = (req, res) => {
  console.log(movieDatabase);
  res.render("index", { movies: movieDatabase.movies });
};

module.exports.getMovie = (req, res) => {
  res.render("index");
};

module.exports.getMovieList = (req, res) => {
  res.render("index");
};
