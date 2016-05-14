function testMiddleware(req, res, next) {
    console.log("this is common for all role routes");
    next();
}

module.exports = testMiddleware;
