var router = require("express").Router();

router.route("/")
    .get(function (req, res) {
        res.send("roles home");
    });
    
module.exports = router;
