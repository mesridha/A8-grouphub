
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var login = require('./routes/login');
var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
//var index = require('./routes/index');
var project = require('./routes/project');
var help = require('./routes/help');
var personality = require('./routes/personality');
var edit = require('./routes/edit');
var creategroup = require('./routes/creategroup');
var joingroup = require('./routes/joingroup');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/login', login.view);
app.get('/', index.view);
app.get('/personality', personality.view);
app.get('/edit', edit.view)
app.get('/project/:name', project.viewProject);
app.get('/help', help.view);
app.get('/creategroup', creategroup.view);
app.get('/joingroup', joingroup.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
