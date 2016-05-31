var usersModel = require("../data/models/users");
var rolesModel = require('../data/models/roles');

function findAll (req, res, next) {
    usersModel.find({})
    .populate({
        path: 'role',
        populate: {
            path: 'parentId'
        }
    })
    .exec(function (err, users) {
        if (err) {
            return next(err);
        }
        res.send(users);   
    }); 
}

function findById (req, res, next) {
    usersModel.findById(req.params.id)
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
        res.send(user);   
    });
}

function add (req, res, next) {
    usersModel.create(req.body, function (err, user) {
        if (err) {
            next(err);
        }
        res.send(user);
    });
}

function update (req, res, next) {
    usersModel.findOneAndUpdate({_id: req.params.id}, req.body, { upsert: true,'new': true }, function (err, rawResponse) {
        if (err) {
            next(err);
        }
        res.send(rawResponse);
    });
}

function del (req, res, next) {
    /*usersModel.remove({_id: req.params.id}, function (err, result) {
        if (err) {
            next(err);
        }
        res.send(result);
    });*/
    usersModel.findById(req.params.id, function(err, user) {
        if (err) {
            return next(err);
        }
        user.remove(function(err, result) {
            if (err) {
                return next(err);
            }
            user.unIndex(function(err) {
                if (err) {
                    console.log(err);
                }
            });
            res.send(result);
        });
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
                    var roleIds = [];
                    roles.forEach(function (role) {
                        roleIds.push(role._id);
                    });
                    usersModel.find({ role: { $in: roleIds } })
                    .populate('role')
                    .exec(function (err, users) {
                        if (err) {
                            return next(err);
                        }
                        console.log(users);
                        res.send(users);
                    }); 
                });
            }); 
        });
    });
}

function search (req, res, next) {
    usersModel.search({
        query: {
            multi_match : {
                query: 'tesTY',
                fields: [ "username", "email", "role.name"]
            }
        }
    }, function (err, users) {
        console.log(users.hits.hits[0]);
    });   
}

module.exports = {
    findAll: findAll,
    findById: findById,
    add: add,
    update: update,
    delete: del,
    findDescendants: findDescendants,
    search: search
}
