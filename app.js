const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.listen(3000, () => console.log("server is running"));

//Set View Engine to EJS
app.set("view engine", "ejs");

//serving static files
app.use(express.static("public"));

//BodyParser middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//route for home /
app.get("/", (req, res) => {
  res.render("Home");
});

//route for /about
app.get("/about", (req, res) => {
  res.render("About");
});

//route for diary page
app.get("/diary", (req, res) => {
    res.render("Diary");
  });

  //route for adding records
  app.get('/add', (req, res) => {
        res.render('Add');

  });

  //route for saving diary
  app.post('/add-to-diary', (req, res) => {
      res.send(req.body);
  })