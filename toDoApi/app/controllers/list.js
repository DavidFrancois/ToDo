var S = require('string');
var _ = require('lodash');

var models = require('./../models');
var configs = require('./../configs');
var utils = require('./../utils');
var common = require('./common');
var Auth = require('./../services/auth') 

var List = models.list;
var Task = models.task;
var User = models.user;

module.exports.create = common.create(List);
module.exports.update = common.update(List);
module.exports.delete = common.delete(List);
module.exports.get = common.get(List);
module.exports.getOne = common.getOne(List);

module.exports.initList = function(req, res) {
    List.create(_.omit(req.body, 'tasks'), function(err, model) {
        if (err) return err;
        req.body.tasks.forEach(function (task){
            model.tasks.push(new Task(task));
        });
        model.save();
        res.status(200);
        User.findOne({ _id: Auth.userService._id }, function(err, user) {
            user.lists.push(model._id);
            user.save();
        });
    });
};

module.exports.addTask = function(req, res) {
    List.findOne({ _id: req.body.listId }, function(err, model) {
        _.each(req.body.tasks, function(task) {
            var newTask = new Task(_.omit(req.body, 'listId'));
            model.tasks.push(newTask);
        });
        model.save();
        res.status(200);
    });
};
