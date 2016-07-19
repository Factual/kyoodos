var conn = require('../db/conn');
var squel = require("squel").useFlavour('postgres');

findAll = function (limit) {
  var sql = squel.select()
                 .from('slack_users');
  if (limit) sql = sql.limit(limit);

  return conn.execute(sql.toString());
}

find = function (ids) {
  var ids_list = ids.split(','),
      sql;

  if (ids_list.length == 1) {
    sql = squel.select()
                   .from('slack_users')
                   .where('id=?', ids_list[0]);

    return conn.execute(sql.toString()).then(function (rows) {
      return rows[0];
    });
  } else {
    sql = squel.select()
                   .from('slack_users')
                   .where('id in ?', ids_list);
    return conn.execute(sql.toString());
  }
}

module.exports = {
  findAll: findAll,
  find: find
}
