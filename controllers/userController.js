const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const {
  validateEmail,
  validatePassword,
  validateName,
} = require("../utils/Validation");
const {randomImage, sendMail} = require("../utils/utils");


module.exports.loginUser = (req, res) => {
  const image = randomImage();

  res.render("login", { image: image, title: "MovieNation | Login", values: req.body });
};

module.exports.signIn =  async(req, res) => {
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

  try {
       const findUser = await userModel.findOne({email: Email})
       const match = await bcrypt.compare(Password, findUser.password);

      if(findUser)
      {
        if (!valid || !match) {
          throw "Password Incorrect";
        }

        req.session.userInfo = findUser;
        res.redirect("/user/dashboard");
      }else{
        throw "Password Incorrect";
      }
  


}catch (error) {
    errors.Password = "Your Email or/and Password is Incorrect";
  
     const image = randomImage();
    res.render("login", {
    image: image,
    title: "MovieNation | Login",
    errors: errors,
    values: req.body,
  });
}
};

module.exports.signUp = async (req, res) => {
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

    try {
      const newUser = new userModel({
        firstname: Firstname,
        lastname: Lastname,
        email: Email,
        password: Password,
      });

      if (!valid || !newUser) { 
        throw "Incorrect Credentials Entered";
      }else{
          const user = await newUser.save();
          const mailSent = await sendMail(user);

          console.log("user info passed", user);
          if (user && mailSent) {
            req.session.userInfo = user;
            console.log("session made");
            res.redirect("/user/dashboard");
          } else {
            throw "Unable to send Email";
          }
      }
    } catch (err) {
      console.log("error registration", err);
      if(err.code === 11000)
      { 
        errors.Email = "Email is Already Registered. Please Login Instead";
      }

        const image = randomImage();
        res.render("register", {
          image: image,
          title: "MovieNation | Register",
          errors: errors,
          values: req.body,
        });
    }
};

module.exports.logout = (req,res) => {
    req.session.destroy();
    res.redirect("/user/login");
}

module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.registerUser = (req, res) => {
  const image = randomImage();

  res.render("register", { image: image, title: "MovieNation | Register" });
};
