var jwt = require('jsonwebtoken');
var usersModel = require("../data/models/users");
var config = require('../config');

function auth (req, res, next) {
	usersModel.findOne({ username: req.body.username })
    .populate({
        path: 'role',
        populate: {
            path: 'parentId'
        }
    })
    .exec(function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
        	return res.json({ success: false, message: 'Authentication failed. User not found.' });
        } 
        else {
        	if (user.password != req.body.password) {
        		res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        	}
        	else {
        		var token = jwt.sign(user, config.secret);
		        // return the information including token as JSON
		        res.json({ success: true, message: 'Enjoy your token!', token: token });
        	}
        }
    });
}

module.exports = {
	auth: auth
}