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

_kyoodosReceivedBy = function(user_id) {
  var sql = squel.select()
              .from('kyoodos_receivers')
              .where('to_user_id=?', user_id)
  return sql
}

toOrFromUser = function(user_id, to_or_from) {
  var sql = squel.select()
              .from('kyoodos', 'k')

  if (to_or_from == "to") {
    sql = sql.join( _kyoodosReceivedBy(user_id), 'r', 'k.id = r.kyoodo_id')

  } else if (to_or_from == "from") {
    sql = sql.where("from_user_id = ?", user_id)
  }

  sql = sql
          .order('created_at', false)
          .toString();

  return conn.execute(sql)
}

module.exports = {
  findAll: findAll,
  lastCreated: lastCreated,
  toOrFromUser: toOrFromUser 
}
