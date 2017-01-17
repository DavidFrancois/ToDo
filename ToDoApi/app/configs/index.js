var configs = {};

var files = [
  'db', 'errors', 'server'
];

for(var i=0; i<files.length; i++)
  configs[files[i]] = require('./' + files[i]);

module.exports = configs;