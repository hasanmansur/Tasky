var router = require("express").Router();
var usersCtrl = require("../../controllers/users");

router.route("/")
    .get (usersCtrl.findAll)
    .post (usersCtrl.add);
    
router.route("/:id")
    .get (usersCtrl.findById)
    .put (usersCtrl.update)
    .delete (usersCtrl.delete);
    
module.exports = router;
