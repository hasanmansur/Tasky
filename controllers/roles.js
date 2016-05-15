function findAll (req, res) {
    res.send("all roles");
}

function add (req, res) {
    res.send("post request");
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
