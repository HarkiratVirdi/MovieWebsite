const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const {
  validateEmail,
  validatePassword,
  validateName,
} = require("../utils/Validation");
const {randomImage, sendMail} = require("../utils/utils");
const movieModel = require("../models/movieModel");
const orderModel = require("../models/orderModel");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

let YOUR_DOMAIN = "http://localhost:5000";
if(process.env.NODE_ENV === "production")
{
  YOUR_DOMAIN = "https://mflixharkirat.herokuapp.com";
}


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

  try {
       const findUser = await userModel.findOne({email: Email})
       
       if(findUser)
       {
         const match = await bcrypt.compare(Password, findUser.password);
         if (!match) {
          throw 1;
        }
        
        req.session.userInfo = findUser;

        
        if(req.session.userInfo.isAdmin )
        { res.redirect("/user/admin");
        }else{
       res.redirect("/user/dashboard");
        }
    
        
      }else{
        throw 2;
      }
}catch (error) {
  if(error === 1)
  {
    errors.Password = "Your Email or/and Password is Incorrect";
  }

  if(error === 2)
  {
    errors.Email = "Email does not exist. Please Register first";
  }

   if (!isEmail) {
     errors.Email = "Email must be valid";
   
   }

    if (!isPassword) {
       errors.Password =
         "Password must have length of 8 characters including 1 letter, 1 number, 1 special character";
  }

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
          if (user && mailSent) {
            user.cart = [];
            req.session.userInfo = user;
            console.log("session after login", user);
            console.log("session2 after login", req.session.userInfo);
            res.redirect("/user/dashboard");
          } else {
            throw "Unable to Register User";
          }
      }
    } catch (err) {
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

module.exports.adminDashboard = async(req, res) => {
  try {
    const allMovies = await movieModel.find({}).lean();
    if(allMovies)
    {
      res.render("Admin", {movies: allMovies});
    }
  } catch (err) {
      console.log("error", err);
  }
}

module.exports.logout = (req,res) => {
    req.session.destroy();
    res.redirect("/user/login");
}

module.exports.deleteUserPage = (req, res) => {
  res.render("deleteUser");
}

module.exports.updateUserPage = (req, res) => {
  const image = randomImage();

  res.render("updateUser", {image: image});
}

module.exports.updateUser = async (req, res) => {
   const { Email, Firstname, Lastname, Password } = req.body;
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
      if (!valid) { 
        throw "Incorrect Credentials Entered";
      }else{

          const user = await userModel.findById(res.locals.user._id);

          if(user)
          { 
            user.firstname = Firstname;
            user.lastname = Lastname;
            user.password = Password;
            user.email = Email;
          }

          const updateUser = await user.save();

          if(updateUser)
          {
            console.log("user updated", updateUser);
            req.session.userInfo = updateUser;
            res.redirect("/user/dashboard");
          }


      }
    } catch (err) {
      if(err.code === 11000)
      { 
        errors.Email = "Email is Already Registered. Please use another Email";
      }

        const image = randomImage();
        res.render("updateUser", {
          image: image,
          title: "MovieNation | UpdateUser",
          errors: errors,
          values: req.body,
        });
    }
}

module.exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await userModel.findByIdAndDelete(res.locals.user);
     if (deleteUser) {
        req.session.destroy();
         res.redirect("/user/register?account=true");
     } else {
      throw "unable to delete user";
     }
  } catch (error) {
   console.log("not deleted", deleteUser);
    res.redirect("/user/delete");
  }
}

module.exports.dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports.registerUser = (req, res) => {
  const image = randomImage();

    let account = false;
    if (req.query.account) {
      account = true;
    }

  res.render("register", { image: image, title: "MovieNation | Register", account: account });
};


module.exports.checkout = async (req, res) => {
   
  const {moviesInCart, tax, subtotal, total} = res.locals.cartDetails;

  res.render("checkout", {
        moviesInCart,
        subtotal,
        tax: parseFloat(tax).toFixed(2),
        total,
        title: "Mflix | Checkout",
      });
  }

module.exports.getOrders = async(req, res) => {
  try {
    const orders = await orderModel.find({user: res.locals.user._id}).lean();

    if(orders)
    {
       console.log("orders **", orders);

      const orderItemsMovies = []; 

       await orders.forEach(async(order) => { 
       const orderMovies = await order.orderItems.map(async(el) => {
        const movieDetails = await movieModel.findById(el.movieId, {img_s_C, name});
        
        return {
          isBuying: el.isBuying,
          price: el.price,
          movieDetails,
        }
      })

      orderItemsMovies.push(orderMovies);
      })

      console.log("orderMovies********************", orderItemsMovies);
      res.render("orders", {
        orders,
        orderItemsMovies,
      })
    }
  } catch (err) {
    console.log("error fetching orders",err);
  }
}


module.exports.payment = async(req, res) => {
 const { moviesInCart, tax, subtotal,total } = res.locals.cartDetails;

  try {
    const product_data = moviesInCart.map((el) => {
      let price = el.buy;
      if(!el.isBuying) 
      {
        price = el.rent; 
      }
    
      return {
        movieId: el._id,
        isBuying: el.isBuying,
        price,
      };
    });

    
console.log("product_data", product_data);
    
    const newOrder = {
      user: res.locals.user._id,
      orderItems: product_data,
      paid: true,
      taxPrice: tax,
      totalPrice: total
    }
    console.log("new order", newOrder);

    const order = await new orderModel(newOrder).save();
    if(order)
    {
      console.log("order", order);
      res.redirect("/user/orders");
    }
  } 
catch (error) {
      console.log("error inserting order to model", error);
  }


  // const session = await stripe.checkout.sessions.create({

  //   payment_method_types: ["card"],
  //   line_items: [
  //     {
  //       price_data: {
  //         currency: "cad",
  //         product_data: product_data,
  //         unit_amount: res.locals.total,
  //       },
  //       quantity: 1,
  //     },
  //   ],
  //   mode: "payment",
  //   success_url: res.redirect("/user/dashboard"),
  //   cancel_url: res.redirect("/user/orders"),
  // });
  // res.json({ id: session.id });
}
