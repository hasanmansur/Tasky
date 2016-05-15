module.exports = {
    findAll: function (req, res) {
        res.send("all roles");
    },
    add: function (req, res) {
        res.send("post request");
    },
    findById: function (req, res) {
        res.send(req.params.id);
    },
    update: function (req, res) {
        res.send(req.params.id);
    },
    delete: function (req, res) {
        res.send(req.params.id);
    }
}
