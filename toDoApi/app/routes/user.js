var express = require('express');
var router = express.Router();
var utils = require('./../utils');
var models = require('./../models');
var controllers = require('./../controllers');
// var transformers = require('./../transformers');
// var renderers = require('./../renderers');

router.get('/auth', controllers.user.getAuth)
router.get('/disconnect', controllers.user.disconnect);
router.get('/lists', controllers.user.getList);
router.get('/', controllers.user.get);
router.post('/auth', controllers.user.auth);
router.post('/', controllers.user.create);
router.delete('/:id', controllers.user.delete);
router.put('/:id', controllers.user.update);


module.exports = {path: '/user', router: router};
