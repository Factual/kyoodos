var conn = require('../db/conn');

findAll = function (limit) {
  var sql = 'SELECT * FROM kyoodos';
  if (limit) {
    sql = sql + ' LIMIT ' + limit;
  }

  return conn.execute(sql);
}

lastCreated = function () {
  var sql = 'SELECT created_at FROM kyoodos ORDER BY created_at DESC LIMIT 1';
  return conn.execute(sql).then(function (rows) {
    return (rows[0] || {}).created_at;
  });
}

module.exports = {
  findAll: findAll,
  lastCreated: lastCreated
}
