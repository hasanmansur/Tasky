var express = require("express");
var routes = require("./routes");

//application 
var app = express();

//routing
routes(app);


//listen
app.listen(3000, function () {
	console.log("REST server listening on port 3000");
});



