var express = require("express");
var routes = require("./routes");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//application 
var app = express();

//JSON parser middleware
app.use(bodyParser.json());

//routing
routes(app);

//db connection
mongoose.connect("mongodb://localhost:27017/tasky/");
var db = mongoose.connection;
db.on('error', function (e) {
    console.log("Error connecting MongoDB: " + e.message);
});
db.once('open', function() {
  console.log("REST server connected to MongoDB");
});

//listen
app.listen(3000, function () {
	console.log("REST server listening on port 3000");
});

//exporting app for unit test
module.exports = app;

