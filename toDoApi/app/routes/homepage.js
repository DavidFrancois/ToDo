var express = require('express');
var router = express.Router();
var utils = require('./../utils');
var models = require('./../models');
var controllers = require('./../controllers');
// var transformers = require('./../transformers');
// var renderers = require('./../renderers');

router.get('/', controllers.homepage.get);

module.exports = {path: '/homepage', router: router};
