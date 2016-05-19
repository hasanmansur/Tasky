var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var NestedSetPlugin = require('mongoose-nested-set');


var rolesSchema = new Schema({
	name: { type: String, required: true }
});

rolesSchema.plugin(NestedSetPlugin);

module.exports = rolesSchema;
