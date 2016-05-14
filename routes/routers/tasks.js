var router = require("express").Router();

router.route("/")
    .get(function (req, res) {
        res.send("tasks home");
    });
    
module.exports = router;
