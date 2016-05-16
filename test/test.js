var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();


chai.use(chaiHttp);

setTimeout(function () {
    var server = require('../app');
    describe("REST API test", function () {
        describe("role module test", function () {
            it("pending tests for role module");
        });
        describe("user module test", function () {
            it("pending tests for user module");
        });
        describe("task module test", function () {
            it("pending tests for task module");
        });
    });
    run();
}, 5000);
