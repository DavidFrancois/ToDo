var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plugins = require('./../plugins');
var models = require('./../../models');

var schema = new Schema({
    name: { type: 'String', trim: true, required: false, maxlength: 255 },
    text: { type: 'String', trim: true, required: false, maxlength: 255},
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'task'},
    childs: [ { type: mongoose.Schema.Types.ObjectId, ref: 'task' }]
});

schema.plugin(plugins.created);

module.exports = mongoose.model('Task', schema);