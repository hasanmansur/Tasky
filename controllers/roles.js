var rolesModel = require('../data/models/roles');
var async = require('async');

function findAll (req, res, next) {
    rolesModel.findOne({ name: 'admin' }, function(err, root) {
        if (err) {
            return next(err);
        }
        rolesModel.rebuildTree(root, root.lft, function() {
            rolesModel.find({})
            .populate('parentId')
            .exec(function (err, roles) {
                if (err) {
                    return next(err);
                }
                res.send(roles);   
            });  
        });
    });
}

function findById (req, res, next) {
    rolesModel.findOne({ name: 'admin' }, function(err, root) {
        if (err) {
            return next(err);
        }
        rolesModel.rebuildTree(root, root.lft, function() {
            rolesModel.findById(req.params.id)
            .populate('parentId')
            .exec(function (err, role) {
                if (err) {
                    return next(err);
                }
                res.send(role);   
            });      
        });
    });
}

function add (req, res, next) {
    rolesModel.findOne({ lft: 1 }, function (err, root) {
        if (err) {
            return next(err);
        }
        rolesModel.rebuildTree(root, root.lft, function () {
            rolesModel.findOne({ _id: req.body.parentId }, function (err, parent) {
                if (err) {
                    return next(err);
                }
                var newRole = new rolesModel({
                    name: req.body.name,
                    parentId: parent._id
                });
                newRole.save(function (err, role) {
                    if (err) {
                        return next(err);
                    }
                    res.send(role);
                });
            });
        });
    });
}

function update (req, res, next) {
    rolesModel.findOne({ lft: 1 }, function (err, root) {
        if (err) {
            return next(err);
        }
        rolesModel.rebuildTree(root, root.lft, function () {
            rolesModel.findOne({ _id: req.body.parentId }, function (err, parent) {
                if (err) {
                    return next(err);
                }
                if (parent) {
                    var newRole = new rolesModel({
                        name: req.body.name,
                        parentId: parent._id
                    });
                    newRole.save({ _id: req.params.id }, function (err, role) {
                        if (err) {
                            return next(err);
                        }
                        res.send(role);
                    });
                }
                else {
                    res.status(404).send();
                }
            });
        });
    });

    
}

function del (req, res, next) {
    rolesModel.findOne({ lft: 1 }, function(err, root) {
        if (err) {
            return next(err);
        }
        rolesModel.rebuildTree(root, root.lft, function() {
            rolesModel.findOne({_id: req.params.id }, function(err, role) {
                if (err) {
                    return next(err);
                }
                role.remove(function(err, result) {
                    res.send(result);
                });
            });
        });
    });
}

function findDescendants (req, res, next) {
    rolesModel.findOne({ lft: 1 }, function(err, root) {
        if (err) {
            return next(err);
        }
        rolesModel.rebuildTree(root, root.lft, function() {
            rolesModel.findOne({ _id: req.params.id }, function (err, role) {
                if (err) {
                    return next(err);
                }
                role.descendants(function (err, roles) {
                    var roleIds = [];
                    roles.forEach(function (role) {
                        roleIds.push(role._id);
                    });
                    rolesModel.find({ _id: { $in: roleIds } })
                    .populate('parentId')
                    .exec(function (err, roles) {
                        if (err) {
                            return next(err);
                        }
                        console.log(roles);
                        res.send(roles);
                    }); 
                });
            }); 
        });
    });
}

function findSelfAndDecendants (req, res, next) {
    rolesModel.findOne({ lft: 1 }, function(err, root) {
        if (err) {
            return next(err);
        }
        rolesModel.rebuildTree(root, root.lft, function() {
            rolesModel.findOne({ _id: req.params.id }, function (err, role) {
                if (err) {
                    return next(err);
                }
                role.selfAndDescendants(function (err, roles) {
                    var roleIds = [];
                    roles.forEach(function (role) {
                        roleIds.push(role._id);
                    });
                    rolesModel.find({ _id: { $in: roleIds } })
                    .populate('parentId')
                    .exec(function (err, roles) {
                        if (err) {
                            return next(err);
                        }
                        console.log(roles);
                        res.send(roles);
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
    findDescendants: findDescendants,
    findSelfAndDecendants: findSelfAndDecendants
}


//***************************test code***********************************************
/*async.forEach(roles, function (role, cb) {
    rolesModel.populate(
        role,
        { path: 'parentId' }
    );
    console.log(role);
});*/
                    
/*roles.forEach(function (role) {
    role
    .populate({
        path: 'parentId'
    });
    console.log(role);
})*/