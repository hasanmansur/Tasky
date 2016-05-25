var router = require("express").Router();
var tasksCtrl = require("../../controllers/tasks");
var loadUser = require("../middlewares/loadUser");

router.use(loadUser);

router.route("/")
    .get (tasksCtrl.findAll)
    .post (tasksCtrl.add);
    
router.route("/:id")
    .get (tasksCtrl.findById)
    .put (tasksCtrl.update)
    .delete (tasksCtrl.delete);

router.route("/find/descendants")
	.get (tasksCtrl.findDescendants);
    
module.exports = router;
