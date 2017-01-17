var S = require('string');
var _ = require('lodash');

var models = require('./../models');
var configs = require('./../configs');
var utils = require('./../utils');
var common = require('./common');
var Task = models.task;

module.exports.create = common.create(Task);
module.exports.update = common.update(Task);
module.exports.delete = common.delete(Task);
module.exports.get = common.get(Task);