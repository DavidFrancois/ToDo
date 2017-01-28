var _ = require('lodash');

var configs = require('./../configs');

var transform = function(obj) {
  var hidden = ['__v', 'password'];
  return _.omit(obj.toJSON(), hidden);
}

module.exports = function(req, res, next) {
  var response = _.get(req, [configs.server.name, 'response'].join('.'));

  if(!response || !response.data || response.err) return next();

  if(_.isArray(response.data))
    response.data = _.map(response.data, transform);
  else
    response.data = transform(response.data);

  _.set(req, [configs.server.name, 'response'].join('.'), response);

  return next();
}
