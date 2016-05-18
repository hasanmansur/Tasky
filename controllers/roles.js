var rolesModel = require("../data/models/roles");

function findAll (req, res, next) {
    rolesModel.find({}, function (err, roles) {
        if (err) {
            next(err.message);
        }
        res.send(roles);
    });
}

function add (req, res, next) {
    rolesModel.create(req.body, function (err, role) {
        if (err) {
            next(err.message);
        }
        res.send(role);
    });
}

function findById (req, res, next) {
    rolesModel.findById(req.params.id, function (err, role) {
        if (err) {
            next(err.message);
        }
        res.send(role);
    });
}

function update (req, res, next) {
    rolesModel.update({_id: req.params.id}, req.body, function (err, rawResponse) {
        if (err) {
            next(err.message);
        }
        res.send(rawResponse);
    });
}

function del (req, res, next) {
    rolesModel.remove({_id: req.params.id}, function (err, result) {
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
