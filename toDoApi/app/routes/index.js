var _ = require('lodash');

var routes = [];

var files = [
  'list', 'user', 'homepage', //'task','team'
];

for (var i = 0; i < files.length; i++) {
  var file = require('./' + files[i]);
  if(_.isArray(file)) routes = routes.concat(file);
  else routes.push(file);
}

module.exports = routes;
