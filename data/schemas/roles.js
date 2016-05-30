var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NestedSetPlugin = require('mongoose-nested-set');

//var mongoosastic = require('mongoosastic');


var rolesSchema = new Schema({
	name: { type: String, required: true }
});

rolesSchema.plugin(NestedSetPlugin);
//rolesSchema.plugin(mongoosastic);

module.exports = rolesSchema;
