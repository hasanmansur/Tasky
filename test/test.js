var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../app');

chai.use(chaiHttp);

setTimeout(function () {
        describe("authenticate api test---------", function () {
            /*it("wrong username: POST /authenticate", function (done) {
                chai.request(server)
                .post('/authenticate')
                .send({username: 'rumman', password: '123'})
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    res.body.should.have.property('message');
                    res.body.success.should.equal(false);
                    res.body.message.should.equal('Authentication failed. User not found.');
                    done();
                });
            });*/
            /*it("wrong password: POST /authenticate", function (done) {
                chai.request(server)
                .post('/authenticate')
                .send({username: 'hasan', password: '1234'})
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    res.body.should.have.property('message');
                    res.body.success.should.equal(false);
                    res.body.message.should.equal('Authentication failed. Wrong password.');
                    done();
                });
            });*/
            /*it("auth success: POST /authenticate", function (done) {
                chai.request(server)
                .post('/authenticate')
                .send({username: 'user_admin', password: '123'})
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    res.body.should.have.property('message');
                    res.body.success.should.equal(true);
                    res.body.message.should.equal('Enjoy your token!');
                    console.log(res.body.token);
                    done();
                });
            });*/
        });
        describe("roles api test----------", function () {
            /*it("POST /roles", function (done) {
                chai.request(server)
                .post('/roles')
                .query({ user_id: '58be205c5a304c869816fd6f' })
                .send({name: 'bata', parentId: '58be1eef5a304c869816fd6e'})
                .end(function (err, res) {
                    console.log(res.body);
                    res.should.have.status(200);
                    done();
                }); 
            });*/
            /*it("GET /roles", function (done) {
                chai.request(server)
                .get('/roles')
                .query({ user_id: '58be205c5a304c869816fd6f' })
                .end(function (err, res) {
                    console.log(res.body);
                    res.should.have.status(200);
                    //res.should.be.json;
                    //res.body.should.be.a('array');
                    //res.body[1].should.have.property('_id');
                    //res.body[1].should.have.property('name');
                    //res.body[1].name.should.equal('admin');
                    //res.body[1].parentId.name.should.equal('admin');
                    done();
                });
            });*/
            /*it("GET /roles/:id", function (done) {
                chai.request(server)
                .get('/roles/58be2283a99858dd0ea5ec31')
                .query({ user_id: '58be205c5a304c869816fd6f' })
                .end(function (err, res) {
                    console.log(res.body);
                    res.should.have.status(200);
                    //res.should.be.json;
                    //res.body.should.be.a('object');
                    //res.body.should.have.property('_id');
                    //res.body.should.have.property('name');
                    //res.body.should.have.property('__v');
                    //res.body.name.should.equal('nata');
                    //res.body.parentId.name.should.equal('admin');
                    done();
                });
            });*/
            /*it("PUT /roles/:id", function (done) {
                chai.request(server)
                .put('/roles/58be9b20f0b3fdf3288ddb7c')
                .query({ user_id: '58be205c5a304c869816fd6f' })
                .send({'name': 'hata', parentId: '58be2283a99858dd0ea5ec31'})
                .end(function (err, res) {
                    console.log(res.body);
                    done();
                });
            });*/
            /*it("DELETE /roles/:id", function (done) {
                chai.request(server)
                .delete('/roles/58be7fcd9efdce0023cbf20a')
                .query({ user_id: '58be205c5a304c869816fd6f' })
                .end(function (err, res) {
                    console.log(res.body);
                    res.should.have.status(200);
                    //console.log(res);
                    done();
                });
            });*/
            /*it("GET /roles/find/descendants", function (done) {
                chai.request(server)
                .get('/roles/find/descendants')
                .query({ user_id: '58be205c5a304c869816fd6f' })
                .end(function (err, res) {
                    console.log(res.body);
                    res.should.have.status(200);
                    done();
                });
            });*/
            /*it("GET /roles/find/selfAndDescendants", function (done) {
                chai.request(server)
                .get('/roles/find/selfAndDescendants')
                .query({ user_id: '58be205c5a304c869816fd6f' })
                .end(function (err, res) {
                    console.log(res.body);
                    res.should.have.status(200);
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
            /*it("GET /search", function (done) {
                chai.request(server)
                .get('/search')
                .query({ user_id: '5744a3e36c873afa1917cb4d', searchText: 'hasan' })
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
