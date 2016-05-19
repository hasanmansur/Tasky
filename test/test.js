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
                .send({name: 'sub admin', parentId: '573e1d2f089bae58b621dc75'})
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('__v');
                    res.body.name.should.equal('sub admin');
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
                    res.body[1].should.have.property('_id');
                    res.body[1].should.have.property('name');
                    res.body[1].should.have.property('__v');
                    res.body[1].name.should.equal('sub admin');
                    res.body[1].parentId.name.should.equal('admin');
                    done();
                });
            });
            it("GET /roles/:id", function (done) {
                chai.request(server)
                .get('/roles/573e1d9445c0419314c5764c')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('__v');
                    res.body.name.should.equal('sub admin');
                    res.body.parentId.name.should.equal('admin');
                    done();
                });
            });
            /*it("PUT /roles/:id", function (done) {
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
            });*/
        });
        describe("user api test", function () {
            it("pending tests for task module");
        });
        describe("task api test", function () {
            it("pending tests for task module");
        });
    });
    run();
}, 5000);
