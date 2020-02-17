//var team = require('../team_120.json');



exports.viewProject = function(req, res){
  var name = req.params.name;
  var teamdata = require('../team_120.json');
  teamdata['projectName'] = name ;
  console.log(teamdata);
  res.render('project', teamdata);
}
