var plugins = {};

var files = ['created'];

for(var i=0; i<files.length; i++)
  plugins[files[i]] = require('./' + files[i]);

module.exports = plugins;
