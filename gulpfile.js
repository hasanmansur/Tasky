var gulp = require("gulp");

gulp.task("testtask1", function () {
    console.log("this is testtask1");
});

gulp.task("testtask2", function () {
    console.log("this is testtask2");
});

gulp.task("default", ["testtask1", "testtask2"], function () {
    console.log("hello this is default gulp task"); 
});
