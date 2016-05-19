var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tasksSchema = new Schema({
	name: { type: String, required: true },
	status: { type: String, required: true, 'enum': ['To Do', 'In Progress', 'Done'] },
	createdBy: { type: Schema.Types.ObjectId, ref: 'user', required: true },
	assignedTo: { type: Schema.Types.ObjectId, ref: 'user', required: true }
});

module.exports = tasksSchema;
