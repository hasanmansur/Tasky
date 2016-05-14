var router = require("express").Router();
var roleMiddleware = require("../middlewares/roles");

// middleware that is specific to this router
router.use(roleMiddleware);

router.route("/")
    .get(function (req, res) {
        res.send("roles home");
    });
    
module.exports = router;
