var mongoose = require("mongoose");

var tasksSchema = new mongoose.Schema({
	name: { type: String, required: true }
});

module.exports = tasksSchema;