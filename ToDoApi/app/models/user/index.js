var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plugins = require('./../plugins');

var schema = new Schema({
    name: { type: 'String', trim: true, required: false, maxlength: 255 },
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List', required: false }]
});

schema.plugin(plugins.created);

module.exports = mongoose.model('User', schema);