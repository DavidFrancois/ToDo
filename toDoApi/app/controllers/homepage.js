
module.exports.get = function (req, res, next) {
  Console.log('ça fonctionne');
        res.status(200).render('../views/index.html').send();
    }