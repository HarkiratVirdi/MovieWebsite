const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./connectDB");
const { movies } = require("../db/db");
dotenv.config();

connectDB();
