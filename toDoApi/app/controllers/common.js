var _ = require('lodash');

var configs = require('./../configs');

module.exports.get = function (Model) {
    return function (req, res, next) {
        Model.find({}, function(err, model) {
            if (err) throw err
            res.writeHead(200,{
              'Content-Type': 'application/json'
            });
            res.write(JSON.stringify(model));
            res.end();
        });
    }
}

module.exports.delete = function (Model) {
    return function (req, res, next) {
        Model.findOne({ _id: req.params.id }, function(err, model) {
            model.remove(function(err, model) {
                if (err) throw err;
                res.writeHead(204,{
                  'Content-Type': 'text/plain'
                });
                res.write("Suppression effectuée.");
                res.end();
            });
        });
    }
}

module.exports.update = function (Model) {
    return function (req, res, next) {
        Model.findOne({ _id: req.params.id }, function (err, model){
            model = _.assign(model, req.body)
            model.save(function(err, model) {
                if (err) return handleError(err); //handleError a verifier
                res.writeHead(500,{
                  'Content-Type': 'application/json'
                });
                res.write(JSON.stringify(model));
                res.end();
            });
        });
    }
}

module.exports.create = function (Model) {
    return function (req, res, next) {
        Model.create(req.body, function(err, model) {
            if (err) throw err;
            res.writeHead(200,{
              'Content-Type': 'application/json'
            });
            res.write(JSON.stringify(model));
            res.end();
        });
    }
}
