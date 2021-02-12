const express = require("express");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config({ path: "./config.env" });

console.log(process.env.PORT);
const PORT = process.env.PORT;

app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main",
    helpers: {
      splittingBySpace: function (str) {
        const arr = str.split(" ");
        return arr;
      },
      splitting: function (str) {
        const arr = str.split("");
        return arr;
      },
      convertToDate: function (str) {
        console.log(str);
        let runtime = str;
        if (str.includes(":")) {
          runtime = str.split(":");
          runtime = parseInt(runtime[0]) * 60 + parseInt(runtime[1]);
          console.log(runtime);
          return runtime;
        }
      },
    },
  })
);
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));
app.use("/", movieRoutes);
app.use("/user", userRoutes);

app.listen(PORT, console.log("server started at", PORT));
