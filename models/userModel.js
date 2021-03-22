const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
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
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", function (next) {
  bcrypt
    .genSalt(10)
    .then((salt) => {
      bcrypt.hash(this.password, salt).then((encryptedPassword) => {
        this.password = encryptedPassword;
        next();
      });
    })
    .catch((err) => console.log("error", err));
});



const userModel = mongoose.model("User", userSchema);


module.exports = userModel;
