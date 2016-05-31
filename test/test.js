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
                .send({name: 'tata', parentId: '574496987b77e06a99fdf561'})
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('_id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('__v');
                    res.body.name.should.equal('faisal');
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
                .put('/roles/574bd0ede4abe0ed14703623')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .send({'name': 'my sub admin', parentId: '574496987b77e06a99fdf561'})
                .end(function (err, res) {
                    done();
                });
            });*/
            /*it("DELETE /roles/:id", function (done) {
                chai.request(server)
                .delete('/roles/574bf1d39dfc617c2237027c')
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
                .send({username: 'hasan', password: '123', role: '574559934e99f0101e3e1808', email: 'hasan@tasky.com'})
                .end(function (err, res) {
                    done();
                }); 
            });*/
            /*it("PUT /users/:id", function (done) {
                chai.request(server)
                .put('/users/574c0e83588baa50268dfb4c')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .send({username: 'hasanmansur', email: 'hasanmansur@tasky.com'})
                .end(function (err, res) {
                    done();
                });
            });*/
            /*it("DELETE /users/:id", function (done) {
                chai.request(server)
                .delete('/users/574c0e83588baa50268dfb4c')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
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
            /*it("GET /users/elastic/search", function (done) {
                chai.request(server)
                .get('/users/elastic/search')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .end(function (err, res) {
                    done();
                });
            });*/
            it("GET /search", function (done) {
                chai.request(server)
                .get('/search')
                .query({ user_id: '5744a3e36c873afa1917cb4d', searchText: 'hasan' })
                .end(function (err, res) {
                    done();
                });
            });
        });
        describe("task api test----------", function () {
            /*it("POST /tasks", function (done) {
                chai.request(server)
                .post('/tasks')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .send({name: 'hasan mansur task', status: 'To Do', createdBy: '5744a3e36c873afa1917cb4d', assignedTo: '5744a3e36c873afa1917cb4d'})
                .end(function (err, res) {
                    done();
                }); 
            });*/
            /*it("PUT /tasks/:id", function (done) {
                chai.request(server)
                .put('/tasks/574d99479f2b6dc50eeb3088')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
                .send({name: 'mansur hasAN task'})
                .end(function (err, res) {
                    done();
                });
            });*/
            /*it("DELETE /tasks/:id", function (done) {
                chai.request(server)
                .delete('/tasks/574d97381b4cc1370ee6efdc')
                .query({ user_id: '5744a3e36c873afa1917cb4d' })
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
