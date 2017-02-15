var express = require('express');
var router = express.Router();
var utils = require('./../utils');
var models = require('./../models');
var controllers = require('./../controllers');
// var transformers = require('./../transformers');
// var renderers = require('./../renderers');

router.get('/', controllers.list.get);
router.delete('/:id', controllers.list.delete);
router.put('/addTask', controllers.list.addTask);
router.put('/:id', controllers.list.update);
// router.put('/:id', controllers.list.updateTask);
router.post('/', controllers.list.create);

module.exports = {path: '/list', router: router};