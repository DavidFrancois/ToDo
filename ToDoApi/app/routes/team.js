var express = require('express');
var router = express.Router();
var utils = require('./../utils');
var models = require('./../models');
var controllers = require('./../controllers');
// var transformers = require('./../transformers');
// var renderers = require('./../renderers');

router.get('/', controllers.team.get);
router.delete('/:id', controllers.team.delete);
router.put('/:id', controllers.team.update);
router.post('/', controllers.team.create);

module.exports = {path: '/team', router: router};