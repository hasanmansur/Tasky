var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../app');

chai.use(chaiHttp);

setTimeout(function () {
    describe("REST API test", function () {
        describe("role api test", function () {
            it("POST /roles", function (done) {
                chai.request(server)
                .post('/roles')
                .send({name: 'admin'})
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    //console.log(res);
                    done();
                }); 
            });
            it("GET /roles", function (done) {
                chai.request(server)
                .get('/roles')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.string;
                    res.should.have.property('text');
                    res.text.should.equal('all roles');
                    done();
                });
            });
            it("GET /roles/:id", function (done) {
                done();
            });
            it("PUT /roles/:id", function (done) {
                done();
            });
            it("DELETE /roles/:id", function (done) {
                done();
            });
        });
        describe("user api test", function () {
            it("pending tests for user module");
        });
        describe("task api test", function () {
            it("pending tests for task module");
        });
    });
    run();
}, 5000);
