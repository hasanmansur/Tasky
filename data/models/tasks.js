var mongoose = require("mongoose");
var tasksSchema = require("../schemas/tasks");

var tasks = mongoose.model("task", tasksSchema);

module.exports = tasks;