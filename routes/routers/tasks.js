var router = require("express").Router();
var tasksCtrl = require("../../controllers/tasks");

router.route("/")
    .get (tasksCtrl.findAll)
    .post (tasksCtrl.add);
    
router.route("/:id")
    .get (tasksCtrl.findById)
    .put (tasksCtrl.update)
    .delete (tasksCtrl.delete);
    
module.exports = router;
