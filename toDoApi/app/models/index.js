var models = {};

var files = [
  'user', 'list', 'task'
];

for(var i=0; i<files.length; i++) {
  models[files[i]] = require('./' + files[i]);
}

module.exports = models;
