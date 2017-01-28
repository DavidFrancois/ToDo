var S = require('string');
var _ = require('lodash');

var models = require('./../models');
var configs = require('./../configs');
var utils = require('./../utils');
var common = require('./common');
var User = models.user;

module.exports.get = common.get(User);
module.exports.delete = common.delete(User);
module.exports.update = common.update(User);
module.exports.create = common.create(User);
