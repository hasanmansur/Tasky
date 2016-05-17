var rolesModel = require("../data/models/roles");

function findAll (req, res) {
    res.send("all roles");
}

function add (req, res) {
    rolesModel.create(req.body, function (err, role) {
        if (err) {
            console.log(err);
        }
        res.send(role);
    });
}

function findById (req, res) {
    res.send(req.params.id);
}

function update (req, res) {
    res.send(req.params.id);
}

function del (req, res) {
    res.send(req.params.id);
}

module.exports = {
    findAll: findAll,
    add: add,
    findById: findById,
    update: update,
    delete: del 
}
