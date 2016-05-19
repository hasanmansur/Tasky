var mongoose = require("mongoose");

var rolesSchema = new mongoose.Schema({
	name: { type: String, required: true }
});

module.exports = rolesSchema;
