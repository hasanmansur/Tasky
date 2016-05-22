var tasksModel = require("../data/models/tasks");

function findAll (req, res, next) {
    tasksModel.find({})
    .populate({
        path: 'createdBy',
        populate: {
            path: 'role'
        }
    })
    .populate({
        path: 'assignedTo',
        populate: {
            path: 'role'
        }
    })
    .exec(function (err, tasks) {
        if (err) {
            return next(err);
        }
        res.send(tasks);   
    }); 
}

function findById (req, res, next) {
    tasksModel.findById(req.params.id)
    .populate({
        path: 'createdBy',
        populate: {
            path: 'role'
        }
    })
    .populate({
        path: 'assignedTo',
        populate: {
            path: 'role'
        }
    })
    .exec(function (err, task) {
        if (err) {
            return next(err);
        }
        res.send(task);  
    });
}

function add (req, res, next) {
    tasksModel.create(req.body, function (err, task) {
        if (err) {
            next(err);
        }
        res.send(task);
    });
}

function update (req, res, next) {
    tasksModel.update({_id: req.params.id}, req.body, function (err, rawResponse) {
        if (err) {
            next(err);
        }
        res.send(rawResponse);
    });
}

function del (req, res, next) {
    tasksModel.remove({_id: req.params.id}, function (err, result) {
        if (err) {
            next(err);
        }
        res.send(result);
    });
}

module.exports = {
    findAll: findAll,
    findById: findById,
    add: add,
    update: update,
    delete: del 
}
