var express = require('express');
var app = express();
var engines = require('consolidate');
var kyoodos = require('./models/kyoodos');

app.engine('haml', engines.haml);
app.set('views', __dirname + '/views');

app.get('/', function(req, res, next) {
  res.render('index.haml');
})

app.get('/api/kyoodos', function(req, res, next) {
  kyoodos.findAll(function(err, data) {
    res.json(data);
  });
})

app.listen(3000, function() {
  console.log('Listening on port 3000!');
})
