const express = require("express");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const { connectDB } = require("./db/connectDB");
const splittingBySpace = require("./views/helpers/splittingBySpace");
const splitting = require("./views/helpers/splitting");
const convertToMin = require("./views/helpers/convertToMin");

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;

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
app.use("/", movieRoutes);
app.use("/user", userRoutes);

app.use((req, res) => {
  res.render("error404.hbs", {
    title: "MovieNation | 404",
  });
});

app.listen(PORT, console.log("server started at", PORT));
