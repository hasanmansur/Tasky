var gulp = require("gulp");
var del = require("del");

gulp.task("clean", function () {
    del.sync(["**/*.*~"]);
});

gulp.task("default", ["clean"], function () {
    console.log("hello this is default gulp task"); 
    gulp.watch("**/", ["clean"]);
    console.log("bye this is default gulp task");
});
