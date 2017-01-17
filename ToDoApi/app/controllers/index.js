var controllers = {};

var files = [
  'user', 'team', 'task', 'list'
];

for(var i=0; i<files.length; i++)
  controllers[files[i]] = require('./' + files[i]);

module.exports = controllers;