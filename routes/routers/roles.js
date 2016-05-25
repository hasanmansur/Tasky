var router = require("express").Router();
var rolesCtrl = require("../../controllers/roles");
var loadUser = require("../middlewares/loadUser");

router.use(loadUser);

router.route("/")
    .get (rolesCtrl.findAll)
    .post (rolesCtrl.add);
    
router.route("/:id")
    .get (rolesCtrl.findById)
    .put (rolesCtrl.update)
    .delete (rolesCtrl.delete);

router.route("/find/descendants")
	.get (rolesCtrl.findDescendants);

router.route("/find/selfAndDescendants")
	.get (rolesCtrl.findSelfAndDecendants);
  
module.exports = router;
