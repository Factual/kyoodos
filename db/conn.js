var pg = require('pg');
var conString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/kyoodos';


Promise = require('promise');
executeFn = function(sql) {
  console.log(sql);
  return new Promise(function (resolve, reject) {
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if(err) {
        console.error('could not connect to postgres', JSON.parse(err));
        reject(err);
        return;
      }

      client.query(sql, function(err, result) {
        if (err) {
          console.error('error running query', JSON.parse(err));
          reject(err);
          return;
        }
        resolve(result.rows);
        client.end();
      });
    });
  });
}

module.exports = { execute: executeFn };
