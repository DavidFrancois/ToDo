var S = require('string');
var _ = require('lodash');

var models = require('./../models');
var configs = require('./../configs');
var utils = require('./../utils');
var common = require('./common');
var User = models.user;

module.exports.auth = function (req, res, next) {
        User.findOne({ login: req.query.login, password: req.query.password }, function(err, model) {
            if (err) throw err
            res.status(200).send(model);
        });
    }
module.exports.get = common.get(User);
module.exports.delete = common.delete(User);
module.exports.update = common.update(User);
module.exports.create = common.create(User);
