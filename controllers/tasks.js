var tasksModel = require("../data/models/tasks");

function findAll (req, res, next) {
    tasksModel.find({}, function (err, tasks) {
        if (err) {
            next(err.message);
        }
        res.send(tasks);
    });
}

function add (req, res, next) {
    tasksModel.create(req.body, function (err, task) {
        if (err) {
            next(err.message);
        }
        res.send(task);
    });
}

function findById (req, res, next) {
    tasksModel.findById(req.params.id, function (err, task) {
        if (err) {
            next(err.message);
        }
        res.send(task);
    });
}

function update (req, res, next) {
    tasksModel.update({_id: req.params.id}, req.body, function (err, rawResponse) {
        if (err) {
            next(err.message);
        }
        res.send(rawResponse);
    });
}

function del (req, res, next) {
    tasksModel.remove({_id: req.params.id}, function (err, result) {
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
