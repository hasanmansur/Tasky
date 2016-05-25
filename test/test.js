var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../app');

chai.use(chaiHttp);

setTimeout(function () {
        describe("roles api test----------", function () {
            /*it("POST /roles", function (done) {
                chai.request(server)
                .post('/roles')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .send({name: 'sub admin4', parentId: '574496987b77e06a99fdf561'})
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('__v');
                    res.body.name.should.equal('sub admin4');
                    done();
                }); 
            });*/
            /*it("GET /roles", function (done) {
                chai.request(server)
                .get('/roles')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
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
                .get('/roles/5744a88e4b5ba46b1c8874c4')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('__v');
                    res.body.name.should.equal('sub admin4');
                    res.body.parentId.name.should.equal('admin');
                    done();
                });
            });*/
            /*it("PUT /roles/:id", function (done) {
                chai.request(server)
                .put('/roles/5745556ae71d7da01ae9ce66')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .send({'name': 'testic sub admin', parentId: '574496987b77e06a99fdf561'})
                .end(function (err, res) {
                    done();
                });
            });*/
            /*it("DELETE /roles/:id", function (done) {
                chai.request(server)
                .delete('/roles/5745556ae71d7da01ae9ce66')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .end(function (err, res) {
                    res.should.have.status(200);
                    //console.log(res);
                    done();
                });
            });*/
            /*it("GET /roles/find/descendants", function (done) {
                chai.request(server)
                .get('/roles/find/descendants')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .end(function (err, res) {
                    done();
                });
            });*/
            /*it("GET /roles/find/selfAndDescendants", function (done) {
                chai.request(server)
                .get('/roles/find/selfAndDescendants')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .end(function (err, res) {
                    console.log(res.status);
                    done();
                });
            });*/
        });
        describe("user api test----------", function () {
            /*it("POST /users", function (done) {
                    chai.request(server)
                    .post('/users')
                    .query({ user_id: '5744a3e36c873afa1917cb4d' })
                    .send({username: 'user_subadmin2', password: '123', role: '574559934e99f0101e3e1808', email: 'user_subadmin2@tasky.com'})
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
                        res.body.username.should.equal('user_subadmin2');
                        res.body.role.should.equal('574559934e99f0101e3e1808');
                        res.body.email.should.equal('user_subadmin2@tasky.com');
                        done();
                    }); 
                });*/
            /*it("PUT /users/:id", function (done) {
                chai.request(server)
                .put('/users/573f60a596394b541317f87b')
                .send({username: 'hasan', email: 'hasan@tasky.com'})
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
            /*it("DELETE /users/:id", function (done) {
                chai.request(server)
                .delete('/users/573f60a596394b541317f87b')
                .end(function (err, res) {
                    
                    done();
                });
            });*/
            /*it("GET /users/find/descendants", function (done) {
                chai.request(server)
                .get('/users/find/descendants')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .end(function (err, res) {
                    done();
                });
            });*/
        });
        describe("task api test----------", function () {
            /*it("POST /tasks", function (done) {
                chai.request(server)
                .post('/tasks')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .send({name: 'task1', status: 'To Do', createdBy: '5744a3e36c873afa1917cb4d', assignedTo: '5744a3e36c873afa1917cb4d'})
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('__v');
                    res.body.should.have.property('name');
                    res.body.should.have.property('status');
                    res.body.should.have.property('createdBy');
                    res.body.should.have.property('assignedTo');
                    res.body.name.should.equal('task1');
                    res.body.status.should.equal('To Do');
                    res.body.createdBy.should.equal('5744a3e36c873afa1917cb4d');
                    res.body.assignedTo.should.equal('5744a3e36c873afa1917cb4d');
                    done();
                }); 
            });*/
            /*it("PUT /users/:id", function (done) {
                chai.request(server)
                .put('/users/573f60a596394b541317f87b')
                .send({username: 'hasan', email: 'hasan@tasky.com'})
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
            /*it("DELETE /users/:id", function (done) {
                chai.request(server)
                .delete('/users/573f60a596394b541317f87b')
                .end(function (err, res) {
                    
                    done();
                });
            });*/
            /*it("GET /tasks", function (done) {
                chai.request(server)
                .get('/tasks')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .end(function (err, res) {
                    done();
                });
            });*/
            /*it("GET /tasks/find/descendants", function (done) {
                chai.request(server)
                .get('/tasks/find/descendants')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .end(function (err, res) {
                    done();
                });
            });*/
        });
    run();
}, 5000);
