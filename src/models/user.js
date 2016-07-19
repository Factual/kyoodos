var conn = require('../db/conn');
var squel = require("squel").useFlavour('postgres');

findAll = function (limit) {
  var sql = squel.select()
                 .from('slack_users');
  if (limit) sql = sql.limit(limit);

  return conn.execute(sql.toString());
}

find = function (id) {
  var sql = squel.select()
                 .from('slack_users')
                 .where('id=?', id);

  return conn.execute(sql.toString()).then(function (rows) {
    return rows[0];
  });
}

findInArray = function (ids) {
  var list = ids.split(',')
  var sql = squel.select()
                 .from('slack_users')
                 .where('id IN ?', list);

  return conn.execute(sql.toString());
}

module.exports = {
  findAll: findAll,
  findInArray: findInArray,
  find: find
}
