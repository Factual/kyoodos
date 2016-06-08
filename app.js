var express = require('express');
var app = express();
var engines = require('consolidate');
var Kyoodo = require('./models/kyoodo');

resJson = function (res) {
  return function(data) { res.json(data)}
}

app.engine('haml', engines.haml);
app.set('views', __dirname + '/views');

app.get('/', function(req, res, next) {
  res.render('index.haml');
})

app.get('/api/kyoodos/lastCreated', function(req, res, next) {
  Kyoodo.lastCreated().then(resJson(res)).catch(next)
})

app.get('/api/kyoodos', function(req, res, next) {
  Kyoodo.findAll().then(resJson(res)).catch(next)
})

app.listen(3000, function() {
  console.log('Listening on port 3000!');
})
