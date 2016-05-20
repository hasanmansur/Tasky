var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../app');

chai.use(chaiHttp);

setTimeout(function () {
    describe("REST API test----------", function () {
        describe("role api test----------", function () {
            /*it("POST /roles", function (done) {
                chai.request(server)
                .post('/roles')
                .send({name: 'sub admin', parentId: '573f2170e324d96ef0bf60c9'})
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
            });*/
            /*it("GET /roles", function (done) {
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
            });*/
            /*it("GET /roles/:id", function (done) {
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
            });*/
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
            });*/
            /*it("DELETE /roles/:id", function (done) {
                chai.request(server)
                .delete('/roles/573f2199c753a81a15235003')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('rgt');
                    res.body.should.have.property('lft');
                    res.body.name.should.equal('sub admin');
                    done();
                });
            });*/
        });
        describe("user api test----------", function () {
            it("POST /users", function (done) {
                chai.request(server)
                .post('/users')
                .send({username: 'user_subadmin', password: '123', role: '573f21b8e56fc053153af6a4', email: 'user_subadmin@tasky.com'})
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('__v');
                    res.body.should.have.property('username');
                    res.body.should.have.property('password');
                    res.body.should.have.property('role');
                    res.body.should.have.property('email');
                    res.body.username.should.equal('user_subadmin');
                    res.body.role.should.equal('573f21b8e56fc053153af6a4');
                    res.body.email.should.equal('user_subadmin@tasky.com');
                    done();
                }); 
            });
        });
        describe("task api test", function () {
            it("pending tests for task module");
        });
    });
    run();
}, 5000);
