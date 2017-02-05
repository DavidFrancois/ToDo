process.env.NODE_ENV = 'test';
var server = require('../server.js');

var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var request = request('http://localhost:8080');

describe('Test backend API' , function () {
  describe('Test Sign-Up', function(){
    it('return 200 and ID when Login, Email and Password are sent', function(done) {
      // on test que le serveur retourne bien une 200 lorsque on écrit un message valide
      request
        .post('/user')
        .send({
          login : 'test',
          email : 'test',
          password : 'test'
        })
        .expect(200)
        .end(function(err,res){
          if (err) return done(err);
          expect(res).to.not.be.undefined;
          expect(res).to.have.property('id');
          done();
        });
      });
    });
  });
