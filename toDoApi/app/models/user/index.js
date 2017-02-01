var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plugins = require('./../plugins');

var schema = new Schema({
    login: { type: 'String', trim: true, required: true, maxlength: 255 },
    email: { type: 'String', trim: true, required: true, maxlength: 255},
    password: { type: 'String', trim: true, required : true, maxlength: 255},
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List', required: false }]
});

schema.plugin(plugins.created);

module.exports = mongoose.model('User', schema);
