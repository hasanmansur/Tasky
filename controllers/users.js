var usersModel = require("../data/models/users");

function findAll (req, res, next) {
    usersModel.find({}, function (err, users) {
        if (err) {
            next(err.message);
        }
        res.send(users);
    });
}

function add (req, res, next) {
    usersModel.create(req.body, function (err, user) {
        if (err) {
            next(err.message);
        }
        res.send(user);
    });
}

function findById (req, res, next) {
    usersModel.findById(req.params.id, function (err, user) {
        if (err) {
            next(err.message);
        }
        res.send(user);
    });
}

function update (req, res, next) {
    usersModel.update({_id: req.params.id}, req.body, function (err, rawResponse) {
        if (err) {
            next(err.message);
        }
        res.send(rawResponse);
    });
}

function del (req, res, next) {
    usersModel.remove({_id: req.params.id}, function (err, result) {
        if (err) {
            next(err.message);
        }
        res.send(result);
    });
}

module.exports = {
    findAll: findAll,
    add: add,
    findById: findById,
    update: update,
    delete: del 
}
