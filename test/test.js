var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../app');

chai.use(chaiHttp);

setTimeout(function () {
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
