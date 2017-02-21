var _ = require('lodash');

var services = [];

var files = [
  'auth'
];

for (var i = 0; i < files.length; i++) {
  services[files[i]] = require('./' + files[i]);
}

module.exports = services;
