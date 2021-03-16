require("dotenv").config();
const mongoose = require("mongoose");
const  {connectDB} = require("./connectDB");
const movieModel = require("../models/movieModel");
const { movies, users } = require("../db/db");
const userModel = require("../models/userModel");

connectDB();


const importMovies = async () => {
  try {
    movies.forEach(async(movie) => {
        const createdMovie = await new movieModel(movie).save();
        console.log(createdMovie);
    })
  } catch (error) {
    console.log("error", error);
  }
};

console.log("arguments", process.argv);

if (process.argv[2] === "-i") {
  importMovies();
} else {
  console.log("not working");
}
