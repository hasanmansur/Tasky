var router = require("express").Router();
var usersCtrl = require("../../controllers/users");
var loadUser = require("../middlewares/loadUser");

router.use(loadUser);

router.route("/")
    .get (usersCtrl.findAll)
    .post (usersCtrl.add);
    
router.route("/:id")
    .get (usersCtrl.findById)
    .put (usersCtrl.update)
    .delete (usersCtrl.delete);

/*router.route("/descendants/:role_id")
	.get (usersCtrl.findDescendants);*/

router.route("/find/descendants")
	.get (usersCtrl.findDescendants);
  
    
module.exports = router;
