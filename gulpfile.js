var gulp = require("gulp");
var del = require("del");

gulp.task("testtask1", function () {
    console.log("this is testtask1");
});

gulp.task("clean", function () {
    del.sync(["**/*.*~"]);
});

gulp.task("default", ["testtask1", "clean"], function () {
    console.log("hello this is default gulp task"); 
});
