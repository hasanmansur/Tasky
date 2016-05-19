var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var emailRegexp = /.+\@.+\..+/;

var usersSchema = new Schema({
	username: { type: String, required: true, unique:true },
	password: { type: String, required: true },
	role: { type: Schema.Types.ObjectId, ref: 'role', required: true },
	email: { type:String, required: true, match: emailRegexp }
});

module.exports = usersSchema;
