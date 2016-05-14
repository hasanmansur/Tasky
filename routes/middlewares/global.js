function testMiddleware(req, res, next) {
    console.log("this is common for all routes");
    next();
}

module.exports = testMiddleware;
