var conn = require('../db/conn');
var squel = require("squel").useFlavour('postgres');

findAll = function (limit) {
  var sql = squel.select()
                 .from('kyoodos')
                 .order('created_at', false);

  if (limit) sql = sql.limit(limit);

  return conn.execute(sql.toString());
}

lastCreated = function () {
  var sql = squel.select('created_at')
                 .from('kyoodos')
                 .order('created_at', false)
                 .limit(1)
                 .toString();
  return conn.execute(sql).then(function (rows) {
    return (rows[0] || {}).created_at;
  });
}

module.exports = {
  findAll: findAll,
  lastCreated: lastCreated
}
