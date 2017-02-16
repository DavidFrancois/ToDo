var _ = require('lodash');

var configs = require('./../configs');

module.exports.get = function (Model) {
    return function (req, res) {
        Model.find({}, function(err, model) {
            if (err) throw err
            res.status(200).send(model);
        });
    }
}

module.exports.getOne = function (Model) {
    return function (req, res) {
        Model.findOne({_id: req.query.id}, function(err, model){
            if (err) throw err;
            res.status(200).send(model);
        });
    } 
}

module.exports.delete = function (Model) {
    return function (req, res) {
        Model.findOne({ _id: req.query.id }, function(err, model) {
            model.remove(function(err, model) {
                if (err) throw err;
                res.status(204).send("Suppression effectuée");
            });
        });
    }
}

module.exports.update = function (Model) {
    return function (req, res) {
        Model.findOne({ _id: req.params.id }, function (err, model){
            model = _.assign(model, req.body)
            model.save(function(err, model) {
                if (err) return handleError(err); //handleError a verifier
                res.status(500).send(model);
            });
        });
    }
}

module.exports.create = function (Model) {
    return function (req, res) {
        Model.create(req.body, function(err, model) {
            if (err) throw err;
            res.status(200).send(model);
        });
    }
}
