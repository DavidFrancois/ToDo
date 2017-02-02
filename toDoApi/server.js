var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var _ = require('lodash');

var Model = require('./app/models');
var utils = require('./app/utils');
var configs = require('./app/configs')
var routes = require('./app/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(utils.mongoUri(configs.db.development.mongo), configs.db.development.mongo.options);

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
var port = configs.server.port;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,Origin');
    next();
}
app.use(allowCrossDomain);
app.use('/', router);

_.forEach(routes, function(route) {
  app.use(route.path, route.router);
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Express server listening on port ' + port);
