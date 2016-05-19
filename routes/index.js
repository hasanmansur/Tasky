var roles = require("./routers/roles");
var users = require("./routers/users");
var tasks = require("./routers/tasks");

var loadUser = require("./middlewares/global");

module.exports = function (app) {
    
    
    app.get("/", function (req, res) {
        res.send("welcome to task manager");
    });
    
    app.use(loadUser);
    
    //route middlewares
    app.use("/roles", roles);
    app.use("/users", users);
    app.use("/tasks", tasks);
    
    
    app.get("*", function (req, res) {
        res.send("no route matched");
    });
         
}

