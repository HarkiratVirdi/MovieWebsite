const imagesForLogin = [
  "https://m.media-amazon.com/images/M/MV5BNGIzNWI4MjQtZWI4Zi00N2U4LTg1MWMtNmRmYmIxOWVjZTkwXkEyXkFqcGdeQWFybm8@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNWMxOGUxN2MtMTBiMi00MWM3LTgzZTItZTYwZTZmYTQ0ZjQ0XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZmE1ZTgwZTEtMzU3YS00MWYzLTk3NzctZDMwZjQxNmRhMGY0XkEyXkFqcGdeQWFybm8@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTFhOGJjZjUtOWM4Ny00ZWE0LWFlMDUtMDAyMTc2MTcxMmM3XkEyXkFqcGdeQWFybm8@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDI0NmYxZmMtN2EyNi00YzMwLTgzNWEtYjY4NmIxMjlmMzJhXkEyXkFqcGdeQXVyNzE3ODQxNjU@._CR212,55,777,437.jpg",
];
const sgMail = require("@sendgrid/mail");
const {
  validateEmail,
  validatePassword,
  validateName,
  validateLogin,
} = require("../utils/Validation");

module.exports.loginUser = (req, res) => {
  const imageNum = Math.floor(Math.random() * 5);
  const image = imagesForLogin[imageNum];
  res.render("login", { image: image, title: "MovieNation | Login" });
};

module.exports.signIn = (req, res) => {
  const { Email, Password } = req.body;

  if (validateLogin(Email, Password)) {
    console.log("logged in");
    res.redirect("/");
  }
};

module.exports.signUp = (req, res) => {
  const { Email, Password, Name } = req.body;
  const isEmail = validateEmail(Email);
  const isPassword = validatePassword(Password);
  const isName = validateName(Name);
  let errors = {
    Name: "",
    Email: "",
    Password: "",
  };

  if (!isEmail) {
    errors.Name = "Email must be valid";
  }
  if (!isName) {
    errors.Email = "Name should only contain Alphabets";
  }
  if (!isPassword) {
    errors.Password =
      "Password must have length of 8 characters including 1 letter, 1 number, 1 special character";
  }

  if (isEmail && isPassword && isName) {
    console.log(process.env.SENDGRID_API_KEY);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: Email,
      from: "harkiratsinghvirdi3@gmail.com",
      subject: "Welcome To MFlix",
      text: "We hope You enjoy this app.",
      html: `<h3>Hi ${Name}</h3>,
            <br>
            <p>Thank You For Signing up.</p>
            <br>
            <p>Once you are logged in you can now Buy and Rent Movies</p>.
            <br>
            <small style="#000">MFlix</small>
      `,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        res.redirect(`/user/dashboard?name=${Name}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }else{
  const imageNum = Math.floor(Math.random() * 5);
  const image = imagesForLogin[imageNum];

  // console.log("errors from erro", errors);
  // console.log('req.body', req.body);
  res.render("register", {
    image: image,
    title: "MovieNation | Register",
    errors: errors,
    values: req.body,
  });
  }
};

module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.registerUser = (req, res) => {
  const imageNum = Math.floor(Math.random() * 5);
  const image = imagesForLogin[imageNum];

  res.render("register", { image: image, title: "MovieNation | Register" });
};
