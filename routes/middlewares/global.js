function loadUser(req, res, next) {
    console.log("req.user need to be set before going to controller");
    next();
}

module.exports = loadUser;
