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



const deleteMovies = async() => {
  try {
      await movieModel.deleteMany();
      console.log("data deleted");
  } catch (err) {
      console.log("error", err);
      process.exit(1);
  }
}


console.log("arguments", process.argv);

if (process.argv[2] === "-i") {
  importMovies();
} else if(process.argv[2] === "-d") {
  deleteMovies();
}else{
  
  console.log("not working");
}
