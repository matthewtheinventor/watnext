const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("main", { dark: false });
});

app.get("/dark", function (req, res) {
  res.render("main", { dark: true });
});

app.listen(8080);
