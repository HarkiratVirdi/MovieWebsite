const express = require("express");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const fileUpload = require("express-fileupload");
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const { connectDB } = require("./db/connectDB");
const session = require("express-session");
const splittingBySpace = require("./views/helpers/splittingBySpace");
const splitting = require("./views/helpers/splitting");
const convertToMin = require("./views/helpers/convertToMin");
const moment = require("./views/helpers/moment");
const iterateThroughArray = require("./views/helpers/iterateThroughArray");
const {userSession, determineMethod} = require("./middleware/userSession");


const PORT = process.env.PORT || 8080;

app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main",
    helpers: {
      splittingBySpace: splittingBySpace,
      splitting: splitting,
      convertToMin: convertToMin,
      iterateThroughArray: iterateThroughArray,
      moment: moment,
    },
  })
);
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: `${process.env.SECRET_KEY}`,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 8 * 60 * 60 * 1000 },
  })
);


app.use(fileUpload());
app.use(userSession);
app.use(determineMethod);
app.get("/", (req, res, next) => {
  console.log("session data", res.locals.user);
  next();
});
app.use("/", movieRoutes);
app.use("/user", userRoutes);
app.use((req, res) => {
  res.render("error404", {
    title: "Mflix | 404",
  });
});


app.listen(PORT, () => {
  console.log("Server started at", PORT);
  connectDB();
})
