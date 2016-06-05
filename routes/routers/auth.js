var router = require("express").Router();
var authCtrl = require("../../controllers/auth");

router.route("/")
    .post(authCtrl.auth);

module.exports = router;

