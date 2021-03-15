const imagesForLogin = [
  "/images/banner/got8.jpg",
  "/images/banner/queenGambit.jpg",
  "/images/banner/wonderWoman.jpg",
];
const sgMail = require("@sendgrid/mail");
const {
  validateEmail,
  validatePassword,
  validateName,
} = require("../utils/Validation");

module.exports.loginUser = (req, res) => {
  const imageNum = Math.floor(Math.random() * 3);
  const image = imagesForLogin[imageNum];
  // console.log("req.body", req.body);
  res.render("login", { image: image, title: "MovieNation | Login", values: req.body });
};

module.exports.signIn = (req, res) => {
  const { Email, Password } = req.body;
 const isEmail = validateEmail(Email);
 const isPassword = validatePassword(Password);
 let errors = {
    Email: "",
    Password: "",
  };

  let valid = true;
  
  if (!isEmail || Email === "") {
    errors.Email = "Email must be valid";
    valid = false;
  }
  
  if (!isPassword || Password === "") {
    errors.Password =
    "Password must have length of 8 characters including 1 letter, 1 number, 1 special character";
    valid = false;
  }

  if (valid) {
    res.redirect("/");
  }else{
      const imageNum = Math.floor(Math.random() * 3);
      const image = imagesForLogin[imageNum];
    res.render("login", {
    image: image,
    title: "MovieNation | Login",
    errors: errors,
    values: req.body,
  });
  }
};

module.exports.signUp = (req, res) => {
  const { Email, Password, Firstname, Lastname } = req.body;
  const isEmail = validateEmail(Email);
  const isPassword = validatePassword(Password);
  const isFirstName = validateName(Firstname);
  const isLastName = validateName(Lastname);
  let errors = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
  };

  let valid = true;

  if (!isEmail || Email === "") {
    errors.Email = "Email must be valid";
    valid = false;
  }
  if (!isLastName || Lastname === "") {
    errors.Lastname = "Last Name should only contain Alphabets";
    valid = false;
  }
  if (!isFirstName || Firstname === "") {
    errors.Firstname = "First Name should only contain Alphabets";
    valid = false;
  }
  if (!isPassword || Password === "") {
    errors.Password =
    "Password must have length of 8 characters including 1 letter, 1 number, 1 special character";
    valid = false;
  }


  if (valid) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: Email,
      from: "harkiratsinghvirdi3@gmail.com",
      subject: "Welcome To MFlix",
      text: "We hope You enjoy this app.",
      html: `<h3>Hi ${Lastname}, ${Firstname}</h3>,
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
        res.redirect(`/user/dashboard?lastname=${Lastname}&firstname=${Firstname}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }else{
  const imageNum = Math.floor(Math.random() * 3);
  const image = imagesForLogin[imageNum];

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
  const imageNum = Math.floor(Math.random() * 3);
  const image = imagesForLogin[imageNum];

  res.render("register", { image: image, title: "MovieNation | Register" });
};
