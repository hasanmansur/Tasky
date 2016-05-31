var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var mongoosastic = require('mongoosastic');
var usersSchema = require("./users");

var tasksSchema = new Schema({
	name: { type: String, required: true },
	status: { type: String, required: true, 'enum': ['To Do', 'In Progress', 'Done'] },
	createdBy: { type: Schema.Types.ObjectId, ref: 'user', required: true, es_schema: usersSchema },
	assignedTo: { type: Schema.Types.ObjectId, ref: 'user', required: true, es_schema: usersSchema }
});

tasksSchema.plugin(mongoosastic, {
  populate: 
  [
  	{ 
    	path: 'createdBy',
		populate: [{
			path: 'role'
		}]
	},
    { 
    	path: 'assignedTo',
    	populate: [{
			path: 'role'
		}]
    }
  ]
});

module.exports = tasksSchema;
