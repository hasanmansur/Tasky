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
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('__v');
                    res.body.name.should.equal('admin');
                    done();
                }); 
            });
            it("GET /roles", function (done) {
                chai.request(server)
                .get('/roles')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body[0].should.have.property('_id');
                    res.body[0].should.have.property('name');
                    res.body[0].should.have.property('__v');
                    res.body[0].name.should.equal('admin');
                    done();
                });
            });
            it("GET /roles/:id", function (done) {
                chai.request(server)
                .get('/roles/573c1f3b59fe20511ae0acb7')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('__v');
                    res.body.name.should.equal('admin');
                    done();
                });
            });
            it("PUT /roles/:id", function (done) {
                chai.request(server)
                .put('/roles/573c1f3b59fe20511ae0acb7')
                .send({'name': 'hasan'})
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('ok');
                    res.body.should.have.property('nModified');
                    res.body.should.have.property('n');
                    res.body.ok.should.equal(1);
                    res.body.nModified.should.equal(1);
                    res.body.n.should.equal(1);
                    done();
                });
            });
            it("DELETE /roles/:id", function (done) {
                chai.request(server)
                .delete('/roles/573c1f3b59fe20511ae0acb7')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('ok');
                    res.body.should.have.property('n');
                    res.body.ok.should.equal(1);
                    res.body.n.should.equal(1);
                    done();
                });
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
