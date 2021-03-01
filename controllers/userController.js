const imagesForLogin = [
  "https://m.media-amazon.com/images/M/MV5BNGIzNWI4MjQtZWI4Zi00N2U4LTg1MWMtNmRmYmIxOWVjZTkwXkEyXkFqcGdeQWFybm8@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNWMxOGUxN2MtMTBiMi00MWM3LTgzZTItZTYwZTZmYTQ0ZjQ0XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZmE1ZTgwZTEtMzU3YS00MWYzLTk3NzctZDMwZjQxNmRhMGY0XkEyXkFqcGdeQWFybm8@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTFhOGJjZjUtOWM4Ny00ZWE0LWFlMDUtMDAyMTc2MTcxMmM3XkEyXkFqcGdeQWFybm8@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDI0NmYxZmMtN2EyNi00YzMwLTgzNWEtYjY4NmIxMjlmMzJhXkEyXkFqcGdeQXVyNzE3ODQxNjU@._CR212,55,777,437.jpg",
];
const {
  validateEmail,
  validatePassword,
  validateName,
} = require("../utils/Validation");

module.exports.loginUser = (req, res) => {
  const imageNum = Math.floor(Math.random() * 5);
  const image = imagesForLogin[imageNum];
  res.render("login", { image: image, title: "MovieNation | Login" });
};

module.exports.signIn = (req, res) => {
  const { Email, Password } = req.body;
  let isEmail = validateEmail(Email);
};

module.exports.signUp = (req, res) => {
  const { Email, Password, Name } = req.body;
  let isEmail = validateEmail(Email);
  let isPassword = validatePassword(Password);
  let isName = validateName(Name);
  console.log("password", isPassword);
  console.log("isemail", isEmail);
  console.log("isName", isName);
};

module.exports.registerUser = (req, res) => {
  const imageNum = Math.floor(Math.random() * 5);
  const image = imagesForLogin[imageNum];

  res.render("register", { image: image, title: "MovieNation | Register" });
};
