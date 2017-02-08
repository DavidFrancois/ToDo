// launching the server
process.env.NODE_ENV = 'test';
var server = require('../server.js');

// packages used to run tests
var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var request = request('http://localhost:8080');

// var needed to run tests
  // Login infos
var correctLogin = "test";
var correctEmail = "test@test.test";
var correctPassword = "test123";
var wrongLogin = "t";
var wrongEmail = "test";
var wrongPassword = "test1";
  // Paths
var signUpPath = '/user';
var signInPath = '/user/auth';
  // Types
var typeJson = 'json';
var typeText = 'text/plain';

// tests
describe('Test backend API' , function () {
  describe('Test Sign-Up', function(){
    it('returns 201 and ID when correct Login, Email and Password are sent', function() {
      return request
        .post(signUpPath)
        .type(typeJson)
        .send({
          login : correctLogin,
          email : correctEmail,
          password : correctPassword
        })
        .expect(201)
        .then(response => {
          expect(response).to.not.be.undefined;
          expect(response.body).to.have.property('_id');
        });
      });
      it('returns 401 when wrong Login is sent', function(done) {
        request
          .post(signUpPath)
          .type(typeJson)
          .send({
            login : wrongLogin,
            email : correctEmail,
            password : correctPassword
          })
          .expect(401)
          .end(done);
        });
      it('returns 401 when wrong Email is sent', function(done) {
        request
          .post(signUpPath)
          .type(typeJson)
          .send({
            login : correctLogin,
            email : wrongEmail,
            password : correctPassword
          })
          .expect(401)
          .end(done);
        });
      it('returns 401 when wrong Password is sent', function(done) {
        request
          .post(signUpPath)
          .type(typeJson)
          .send({
            login : correctLogin,
            email : correctEmail,
            password : wrongPassword
          })
          .expect(401)
          .end(done);
        });
    });
    describe('Test Sign-In', function(){
      it('returns 200 when correct Login and Password are sent', function(done){
        request
        .get(signInPath)
        .type(typeJson)
        .query({
          login : correctLogin,
          password : correctPassword
        })
        .expect(200)
        .end(done);
      });
      it('returns 401 when wrong Login is sent', function(done){
        request
        .get(signInPath)
        .type(typeJson)
        .query({
          login : wrongLogin,
          password : correctPassword
        })
        .expect(401)
        .end(done);
      });
      it('returns 401 when wrong Password is sent', function(done){
        request
        .get(signInPath)
        .type(typeJson)
        .query({
          login : correctLogin,
          password : wrongPassword
        })
        .expect(401)
        .end(done);
      });
    });
  });
