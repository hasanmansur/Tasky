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
                .query({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sInBvcHVsYXRlZCI6eyJyb2xlIjp7InZhbHVlIjoiNTc0NTU5OTM0ZTk5ZjAxMDFlM2UxODA4Iiwib3B0aW9ucyI6eyJwYXRoIjoicm9sZSIsInBvcHVsYXRlIjpbeyJwYXRoIjoicGFyZW50SWQiLCJfZG9jcyI6e319XSwiX2RvY3MiOnsiNTc0ZDIzYWY0YzhhYWI5YTEzODBlYzNkIjoiNTc0NTU5OTM0ZTk5ZjAxMDFlM2UxODA4In19fX0sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7ImVtYWlsIjoiaW5pdCIsInJvbGUiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwiZW1haWwiOnRydWUsInJvbGUiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJ1c2VybmFtZSI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjIsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwiZW1haWwiOiJoYXNhbkB0YXNreS5jb20iLCJyb2xlIjp7Il9pZCI6IjU3NDU1OTkzNGU5OWYwMTAxZTNlMTgwOCIsInJndCI6MTUsImxmdCI6MTQsIm5hbWUiOiJ0ZXN0eSBzdWIgYWRtaW4iLCJwYXJlbnRJZCI6eyJfaWQiOiI1NzQ0OTY5ODdiNzdlMDZhOTlmZGY1NjEiLCJuYW1lIjoiYWRtaW4iLCJsZnQiOjEsInJndCI6Mjh9LCJfX3YiOjB9LCJwYXNzd29yZCI6IjEyMyIsInVzZXJuYW1lIjoiaGFzYW4iLCJfaWQiOiI1NzRkMjNhZjRjOGFhYjlhMTM4MGVjM2QifSwiX3ByZXMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W251bGwsbnVsbF19LCJfcG9zdHMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W119LCJpYXQiOjE0NjUxOTk4OTEsImV4cCI6MTQ2NTE5OTk1MX0.ctDu34j3-yABM4-2TXEHOrh0iqWXKliFIZIhXZr06L8' })
                .send({name: 'tata', parentId: '574496987b77e06a99fdf561'})
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.message.should.equal('failed to authenticate');
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
                .query({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sInBvcHVsYXRlZCI6eyJyb2xlIjp7InZhbHVlIjoiNTc0NDk2OTg3Yjc3ZTA2YTk5ZmRmNTYxIiwib3B0aW9ucyI6eyJwYXRoIjoicm9sZSIsInBvcHVsYXRlIjpbeyJwYXRoIjoicGFyZW50SWQiLCJfZG9jcyI6e319XSwiX2RvY3MiOnsiNTc0NGEzZTM2Yzg3M2FmYTE5MTdjYjRkIjoiNTc0NDk2OTg3Yjc3ZTA2YTk5ZmRmNTYxIn19fX0sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7ImVtYWlsIjoiaW5pdCIsInJvbGUiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwiZW1haWwiOnRydWUsInJvbGUiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJ1c2VybmFtZSI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjIsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwiZW1haWwiOiJhZG1pbkB0YXNreS5jb20iLCJyb2xlIjp7Il9pZCI6IjU3NDQ5Njk4N2I3N2UwNmE5OWZkZjU2MSIsIm5hbWUiOiJhZG1pbiIsImxmdCI6MSwicmd0IjozMH0sInBhc3N3b3JkIjoiMTIzIiwidXNlcm5hbWUiOiJ1c2VyX2FkbWluIiwiX2lkIjoiNTc0NGEzZTM2Yzg3M2FmYTE5MTdjYjRkIn0sIl9wcmVzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltudWxsLG51bGxdfSwiX3Bvc3RzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltdfSwiaWF0IjoxNDY1MjAxMjY4LCJleHAiOjE0NjUyMDEzMjh9.4RAkcuOiMMv3MNj3nudrcPyBSKz3Bw5tJFPQNj9UVPA'})
                .end(function (err, res) {
                    res.should.have.status(200);
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
