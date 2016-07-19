var express = require('express');
var app = express();
var engines = require('consolidate');
var Kyoodo = require('./models/kyoodo');
var User = require('./models/user');

resJson = function (res) {
  return function(data) { res.json(data || null)}
}


app.use(express.static('public'));
app.engine('haml', engines.haml);
app.set('views', __dirname + '/../views');

app.get('/', function(req, res, next) {
  res.render('index.haml');
})

app.get('/api/kyoodos/lastCreated', function(req, res, next) {
  Kyoodo.lastCreated().then(resJson(res)).catch(next);
})

app.get('/api/kyoodos', function(req, res, next) {
  Kyoodo.findAll().then(resJson(res)).catch(next);
})
app.get('/api/users', function(req, res, next) {
  User.findAll().then(resJson(res)).catch(next);
})
app.get('/api/users/:ids', function(req, res, next) {
  User.find(req.params.ids).then(resJson(res)).catch(next);
})

var server = app.listen(3000, function() {
  console.log('Listening on port 3000!');
})

module.exports = server;
