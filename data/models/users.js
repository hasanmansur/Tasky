var mongoose = require("mongoose");
var usersSchema = require("../schemas/users");

var users = mongoose.model("user", usersSchema);

module.exports = users;
