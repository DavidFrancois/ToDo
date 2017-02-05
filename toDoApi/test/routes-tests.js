process.env.NODE_ENV = 'test';
var server = require('../server.js');

var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var request = request('http://localhost:8080');

describe('Test backend API' , function () {
  describe('Test Sign-Up', function(){
    it('return 200 and ID when Login, Email and Password are sent', function() {
      return request
        .post('/user')
        .type("json")
        .send({
          login : 'test',
          email : 'test',
          password : 'test'
        })
        .expect(200)
        .then(response => {
          expect(response).to.not.be.undefined;
          expect(response.body).to.have.property('_id');
        });
      });
    });
  });
