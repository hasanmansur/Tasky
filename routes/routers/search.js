var router = require("express").Router();
var searchCtrl = require("../../controllers/search");
var loadUser = require("../middlewares/loadUser");

router.use(loadUser);

router.route("/")
    .get(searchCtrl.search);
  
module.exports = router;
