var S = require('string');
var _ = require('lodash');

var models = require('./../models');
var configs = require('./../configs');
var utils = require('./../utils');
var common = require('./common');
var User = models.user;

module.exports.auth = function (req, res, next) {
  User.findOne({ login: req.body.login, password: req.body.password }, function(err, model) {
    if (err) throw err
    if(model){
      res.writeHead(200,{
        'Content-Type': 'text/plain'
      });
      res.write("Success !");
      res.end();
    }
    else {
      res.writeHead(401,{
        'Content-Type': 'text/plain'
      });
      res.write("Wrong Login or Password");
      res.end();
    }
  });
}

module.exports.get = common.get(User);
module.exports.delete = common.delete(User);
module.exports.update = common.update(User);
module.exports.create = common.create(User);
