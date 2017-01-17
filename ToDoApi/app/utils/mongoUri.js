module.exports = function(config) {
  var uri = 'mongodb://';
  uri += config.host + ':' + config.port + '/' + config.db;
  return uri;
}
