var jwt = require('jsonwebtoken');
var usersModel = require("../../data/models/users");
var config = require('../../config');

function loadUser (req, res, next) {
    var token = req.body.token ||  req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'failed to authenticate' });
            }
            else {

                req.user = decoded._doc;
                console.log(req.user.role._id);
                next();
            }
        });
    }
    else {
        return res.status(403).send({
            success: false,
            message: 'token not found in request'
        });
    }
}

module.exports = loadUser;




/*function loadUser(req, res, next) {
    usersModel.findById(req.query.user_id)
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
            return res.status(404).send('user not found');
        }
        req.user = user;
        console.log('------------ req user ----------------');
        console.log(req.user);
        console.log('------------ req user ----------------');
        next();  
    });
}*/
