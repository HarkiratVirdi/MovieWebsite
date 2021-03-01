const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required"],
    lowercase: true,
    unique: true,
    // validate: [validator.isEmail, "An email is required"],
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const user = mongoose.model("User", userSchema);

module.exporst = user;
