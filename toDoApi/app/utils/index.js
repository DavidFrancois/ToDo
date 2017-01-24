var utils = {};

var files = [
  'env', 'mongoUri'
];

for(var i=0; i<files.length; i++)
  utils[files[i]] = require('./' + files[i]);

module.exports = utils;