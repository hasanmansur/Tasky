var usersModel = require("../../data/models/users");

function loadUser(req, res, next) {
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
}

module.exports = loadUser;
