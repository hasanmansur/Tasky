var roles = require("./routers/roles");
var users = require("./routers/users");
var tasks = require("./routers/tasks");
var search = require("./routers/search");
var auth = require("./routers/auth");

module.exports = function (app) {
    
    app.get("/", function (req, res) {
        res.send("welcome to task manager");
    });
    
    //route middlewares
    app.use("/authenticate", auth);
    app.use("/roles", roles);
    app.use("/users", users);
    app.use("/tasks", tasks);
    app.use("/search", search);
    
    /*app.get("*", function (req, res) {
        res.send("no route matched");
    });
    */
    
         
}

