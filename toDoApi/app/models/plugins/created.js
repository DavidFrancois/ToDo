module.exports = function(schema) {
  var fields = {};
  var property = 'created';

  if (!schema.paths[property])
    fields[property] = { type: Date, index: true, default: Date.now };

  schema.add(fields)
}
