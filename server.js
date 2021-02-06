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

app.engine("hbs", exphbs({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", movieRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.render("index", { name: "Hello World" });
});

app.listen(PORT, console.log("server started at", PORT));
