var express = require('express');
var app = express();
var engines = require('consolidate');

var conn = require('./db/conn');

app.engine('haml', engines.haml);
app.set('views', __dirname + '/views');

app.get('/', function(req, res, next) {
  res.render('index.haml');
})
app.get('/kyoodos', function(req, res, next) {
  conn.execute('SELECT * from kyoodos').then(function(kyoodos) {
    res.json(kyoodos);
  })
})

app.listen(3000, function() {
  console.log('Listening on port 3000!');
})
