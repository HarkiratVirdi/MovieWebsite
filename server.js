const express = require("express");
// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const { connectDB } = require("./db/connectDB");
const session = require("express-session");
const splittingBySpace = require("./views/helpers/splittingBySpace");
const splitting = require("./views/helpers/splitting");
const convertToMin = require("./views/helpers/convertToMin");
const {userSession, determineMethod} = require("./middleware/userSession");

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8080;

connectDB();

app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main",
    helpers: {
      splittingBySpace: splittingBySpace,
      splitting: splitting,
      convertToMin: convertToMin,
    },
  })
);
app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: `${process.env.SECRET_KEY}`,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 8 * 60 * 60 * 1000 },
  })
);

app.use(userSession);
app.use(determineMethod);
app.use("/", movieRoutes);
app.use("/user", userRoutes);
app.use((req, res) => {
  res.render("error404", {
    title: "MovieNation | 404",
  });
});

app.listen(PORT, console.log("server started at", PORT));
