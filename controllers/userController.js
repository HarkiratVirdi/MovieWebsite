const imagesForLogin = [
  "/images/banner/got8.jpg",
  "/images/banner/queenGambit.jpg",
  "/images/banner/wonderWoman.jpg",
];
const bcrypt = require("bcryptjs");
const sgMail = require("@sendgrid/mail");
const userModel = require("../models/userModel");
const {
  validateEmail,
  validatePassword,
  validateName,
} = require("../utils/Validation");


module.exports.loginUser = (req, res) => {
  const imageNum = Math.floor(Math.random() * 3);
  const image = imagesForLogin[imageNum];

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


if (valid) {
  try {
       const findUser = await userModel.findOne({email: Email})
       const match = await bcrypt.compare(Password, findUser.password);

       if(findUser && match)
       {
         res.redirect("/list");
       }else if(findUser){   
         errors.Password = "Password is Incorrect. Please enter correct Password";
       }

     const imageNum = Math.floor(Math.random() * 3);
     const image = imagesForLogin[imageNum];
     console.log("errors ", error);
     res.render("login", {
       image: image,
       title: "MovieNation | Login",
       errors: errors,
       values: req.body,
     });
}catch (error) {
  
  errors.Email = "Email is not registered. Please Register first.";
    const imageNum = Math.floor(Math.random() * 3);
    const image = imagesForLogin[imageNum];
  console.log("errors ", error);
    res.render("login", {
    image: image,
    title: "MovieNation | Login",
    errors: errors,
    values: req.body,
  });
}
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


  if (valid) {
    const newUser = new userModel({
      firstname: Firstname,
      lastname: Lastname,
      email: Email,
      password: Password
    });

    try {
      const user = await newUser.save();

      if (user) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
          to: Email,
          from: "harkiratsinghvirdi3@gmail.com",
          subject: "Welcome To MFlix",
          text: "We hope You enjoy this app.",
          html: `<h3>Hi ${Lastname}, ${Firstname}</h3>
            <p>Thank You For Signing up.</p>
            <p>Once you are logged in you can now Buy and Rent Movies</p>.
            <br>
            <h3 style="#000">MFlix</h3>
      `,
        };

        try {
          const msgSend = await sgMail.send(msg);

          if (msgSend) {
            console.log("Email Sent");
            res.redirect(
              `/user/dashboard?lastname=${user.firstname}&firstname=${user.lastname}`
            );
          }
        } catch (error) {
          console.log("error sending mail", error);
        }
      }
    } catch (err) {
      console.log("error registration", err);
      if(err.code === 11000)
      { 
        errors.Email = "Email is Already Registered. Please Login Instead";
      }

        const imageNum = Math.floor(Math.random() * 3);
        const image = imagesForLogin[imageNum];

        res.render("register", {
          image: image,
          title: "MovieNation | Register",
          errors: errors,
          values: req.body,
        });
    }
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
