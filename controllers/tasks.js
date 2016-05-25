var tasksModel = require("../data/models/tasks");
var rolesModel = require("../data/models/roles");
var usersModel = require("../data/models/users");

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

function findDescendants (req, res, next) {
    rolesModel.findOne({ lft: 1 }, function(err, root) {
        if (err) {
            return next(err);
        }
        rolesModel.rebuildTree(root, root.lft, function() {
            rolesModel.findOne({ _id: req.user.role._id }, function (err, role) {
                if (err) {
                    return next(err);
                }
                role.descendants(function (err, roles) {
                    if (err) {
                            return next(err);
                    }
                    var roleIds = [];
                    roles.forEach(function (role) {
                        roleIds.push(role._id);
                    });
                    usersModel.find({ role: { $in: roleIds } })
                    //.populate('role')
                    .exec(function (err, users) {
                        if (err) {
                            return next(err);
                        }
                        var userIds = [];
                        users.forEach(function (user) {
                            userIds.push(user._id);
                        });
                        tasksModel.find({ assignedTo: { $in: userIds } })
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
                            console.log(tasks);
                            res.send(tasks);
                        });
                    }); 
                });
            }); 
        });
    });
}

module.exports = {
    findAll: findAll,
    findById: findById,
    add: add,
    update: update,
    delete: del,
    findDescendants: findDescendants
}
