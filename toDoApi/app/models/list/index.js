var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plugins = require('./../plugins');
var models = require('./../../models');

var Task = models.task;

var schema = new Schema({
    name: { type: 'String', trim: true, required: false, maxlength: 255 },
    tasks: [Task]
});

schema.plugin(plugins.created);

module.exports = mongoose.model('List', schema);