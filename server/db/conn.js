var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/kyoodos';


Promise = require('promise');
executeFn = function(sql) {
  return new Promise(function (fulfill, reject) {
    var client = new pg.Client(connectionString);
    client.connect();
    var query = client.query(sql);
    var rows = [];
    query.on('error', function() { reject('dbError'); });
    query.on('result', function(row) { rows.push(row); });
    query.on('end', function() { 
      client.end();
      fulfill(rows);
    });
  })
}

module.exports = { execute: executeFn };
