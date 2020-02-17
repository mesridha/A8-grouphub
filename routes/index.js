
var main = require('../index.json');

exports.view = function(req, res){
  res.render('index', main);
 };
