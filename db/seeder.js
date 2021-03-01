const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { connectDB } = require("./connectDB");
const Movie = require("../models/movieModel");
const { movies, users } = require("../db/db");
const User = require("../models/userModel");

connectDB();

const importMovies = async () => {
  try {
    const createdUser = await User.create(users);
    console.log(createdUser);
  } catch (error) {
    console.log("error", error);
  }
};

if (process.argv[2] === "-i") {
  importMovies();
} else {
  console.log("not working");
}
