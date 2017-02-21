var S = require('string');
var _ = require('lodash');

var models = require('./../models');
var configs = require('./../configs');
var utils = require('./../utils');
var common = require('./common');
var services = require('../services');
var User = models.user;
var Auth = services.auth;
var List = models.list;

module.exports.auth = function (req, res, next) {
  User.findOne({ login: req.body.login, password: req.body.password }, function(err, model) {
    if (err) throw err
    if(model) { 
      Auth.userService.isConnected = true;
      Auth.userService._id = model._id;
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

module.exports.getAuth = function (req, res, next) {
  res.send(Auth.userService.isConnected);
};

module.exports.disconnect = function (req, res, next) {
  Auth.userService.isConnected = false;
  Auth.userService._id = undefined; 
  res.send('disconnection successful');
};

module.exports.getList = function( req, res, next) { 
  var lists = [];
    
  User.findOne({ _id: Auth.userService._id }, function(err, model){
    console.log(model)
    
          var i = 0;
    model.lists.forEach(function (list) {

      List.findOne({ _id: list }, function (err, data) {
        // console.log(data, 'data')
        lists.push(data);
        i++;
        console.log(i, lists)
        if (i >= model.lists.length) { 
          console.log(lists);
          res.send(lists)
        }
      });
    });
  });
};


module.exports.get = common.get(User);
module.exports.delete = common.delete(User);
module.exports.update = common.update(User);
module.exports.create = common.create(User);
