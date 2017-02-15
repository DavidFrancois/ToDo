var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var plugins = require('./../plugins');

var team = new Schema({
    name: { type: 'String', trim: true, required: false, maxlength: 255 }
});

var schema = new Schema({
    name: { type: 'String', trim: true, required: false, maxlength: 255 },
    // teams: [team],
    login: { type: 'String', trim: true, required: true, maxlength: 255 },
    email: { type: 'String', trim: true, required: true, maxlength: 255},
    password: { type: 'String', trim: true, required : true, maxlength: 255},
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List', required: false }],
});

schema.plugin(plugins.created);

module.exports = mongoose.model('User', schema);
