const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
//var jwt = require('jsonwebtoken');

//const api = require('./server/routing/api');

const port = 7777;
const app = express();

app.use(express.static("./../build"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/react", function(err) {
  if (err) {
    console.log("Error occured db not connected");
  } else {
    console.log("db connected successfully");
  }
});

//app.use('/', api);

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, function() {
  console.log("Server running on port number" + port);
});
