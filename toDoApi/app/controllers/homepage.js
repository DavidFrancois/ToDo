
module.exports.get = function (req, res) {
  //console.log('ça fonctionne');
  res.status(200).render('../views/homepage.html');
}
