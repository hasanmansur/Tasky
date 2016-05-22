var router = require("express").Router();
var rolesCtrl = require("../../controllers/roles");

router.route("/")
    .get (rolesCtrl.findAll)
    .post (rolesCtrl.add);
    
router.route("/:id")
    .get (rolesCtrl.findById)
    .put (rolesCtrl.update)
    .delete (rolesCtrl.delete);

router.route("/descendants/:id")
	.get (rolesCtrl.findDescendants);
  
module.exports = router;
