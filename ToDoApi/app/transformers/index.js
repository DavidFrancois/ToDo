var transformers = {};

var files = [
  'user', 'team', 'task', 'list'
];

for(var i=0; i<files.length; i++)
  transformers[files[i]] = require('./' + files[i]);

module.exports = transformers;