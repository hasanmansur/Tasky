var mongoose = require("mongoose");
var rolesSchema = require("../schemas/roles");

var roles = mongoose.model("role", rolesSchema);

module.exports = roles;
