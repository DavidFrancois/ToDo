var S = require('string');
var _ = require('lodash');

var models = require('./../models');
var configs = require('./../configs');
var utils = require('./../utils');
var common = require('./common');
var List = models.list;
var Task = models.task;

module.exports.create = common.create(List);
module.exports.update = common.update(List);
module.exports.delete = common.delete(List);
module.exports.get = common.get(List);