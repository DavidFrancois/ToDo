var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plugins = require('./../plugins');

var team = new Schema({
    name: { type: 'String', trim: true, required: false, maxlength: 255 }
});

var schema = new Schema({
    name: { type: 'String', trim: true, required: false, maxlength: 255 },
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List', required: false }],
    teams: [team]
});

schema.plugin(plugins.created);

module.exports = mongoose.model('User', schema);