//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmiResult = weight / (height * height);

  res.send("<h1>BMI Calculator</h1>Your BMI is " + Math.round(bmiResult));
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
