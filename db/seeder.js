const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./connectDB");
const Movie = require("../models/movieModel");
const { movies } = require("../db/db");

dotenv.config();

connectDB();

const importMovies = () => {};
