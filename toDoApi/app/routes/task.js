var express = require('express');
var router = express.Router();
var utils = require('./../utils');
var models = require('./../models');
var controllers = require('./../controllers');
// var transformers = require('./../transformers');
// var renderers = require('./../renderers');

router.get('/', controllers.task.get);
router.delete('/:id', controllers.task.delete);
router.put('/:id', controllers.task.update);
router.post('/', controllers.task.create);

module.exports = {path: '/task', router: router};