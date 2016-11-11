/**
 * Created by Joshua Baert on 11/10/2016.
 */

var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');

var config = require('./config');
var corsOptions = {
	origin: 'http://localhost:3000'
};

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(session({
	secret: config.sessionSecret,
	saveUninitialized: false,
	resave: false,
}));


app.get('/api/profiles', profileCtrl.friends);


app.post('/api/login', userCtrl.login);


app.listen(config.port, function () {
	console.log(__dirname);
	console.log('listening on port ' + config.port);
});