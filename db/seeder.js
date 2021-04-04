require("dotenv").config({path: "../.env"});
const mongoose = require("mongoose");
const  {connectDB} = require("./connectDB");
const movieModel = require("../models/movieModel");
const { movies, users } = require("../db/db");
const userModel = require("../models/userModel");
const orderModel = require("../models/orderModel");


console.log("process", process.env.MONGO_URI);
console.log("process", process.env.NODE_ENV);
connectDB();

const userInDB = {
  user: "6051746cae7ec4911052a726",
  orderItems: [
    {
      movieId: "6065f16965d94c3fa4d80aee",
      isBuying: false,
      price: 23,
    },
    {
      movieId: "6065f0e18a0983b0b8a60a1f",
      isBuying: false,
      price: 10,
    },
    {
      movieId: "6065f16965d94c3fa4d80b26",
      isBuying: true,
      price: 60,
    },
  ],
  paid: true,
  taxPrice: 15,
  totalPrice: 93,
};


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

const importUsers = async() => {
  try{
    const order = await new orderModel(userInDB).save();
    console.log("order created", order);
  }catch(error){
    console.log("error", error)
  }
}

importUsers();

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
