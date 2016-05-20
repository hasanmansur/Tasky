var rolesModel = require('../data/models/roles');

function findAll (req, res, next) {
    /*rolesModel.find({})
    .populate('parentId')
    .exec(function (err, roles) {
        if (err) {
            return next(err);
        }
        res.send(roles);   
    });*/
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
    /*rolesModel.findById(req.params.id)
    .populate('parentId')
    .exec(function (err, role) {
        if (err) {
            return next(err);
        }
        res.send(role);   
    });*/
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
    rolesModel.findOne({ name: 'admin' }, function (err, root) {
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
    rolesModel.update({_id: req.params.id}, req.body, function (err, rawResponse) {
        if (err) {
            next(err.message);
        }
        res.send(rawResponse);
    });
}

function del (req, res, next) {
    rolesModel.findOne({ name: 'admin' }, function(err, root) {
        console.log(root);
        if (err) {
            return next(err);
        }
        rolesModel.rebuildTree(root, root.lft, function() {
            rolesModel.findOne({_id: req.params.id }, function(err, role) {
                console.log(role);
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

module.exports = {
    findAll: findAll,
    findById: findById,
    add: add,
    update: update,
    delete: del 
}
