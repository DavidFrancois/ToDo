// launching the server
process.env.NODE_ENV = 'test';
var server = require('../src/main');

// packages used to run tests
var Vue = require('vue')
var input = require('../src/components/inputs/Input.vue')

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
describe('input', function () {
  it('isValid = false when invalidate() has been called', function () {
    input.invalidate();
    expect(input.data().isValid).toBe(false);
  })
})
