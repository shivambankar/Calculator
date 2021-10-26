//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/calculator", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/calculator", function(req, res) {  //After submitting this form he,
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation is "+ result);  //he will get this message
});


app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  var w = parseFloat(req.body.w);
  var h = parseFloat(req.body.h);
  var result = w / (h*h);
  res.send("The result of the calculation is "+ result);
});


app.listen(3000, function(){
  console.log("server started on port 3000");
});
//When you click view page source of this server you can only see the raw code or html but not the operation or logic of our program as we wrote that in backend.
