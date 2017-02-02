var express = require('express');
var router = express.Router();
var utils = require('./../utils');
var models = require('./../models');
var controllers = require('./../controllers');
// var transformers = require('./../transformers');
// var renderers = require('./../renderers');

router.get('/', controllers.user.get);
router.post('/', controllers.user.create);
router.delete('/:id', controllers.user.delete);
router.put('/:id', controllers.user.update);


module.exports = {path: '/user', router: router};
