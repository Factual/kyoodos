var conn = require('../db/conn');

var kyoodos = (function() {
  return {
    findAll: function(cb) {
      conn.execute('SELECT * from kyoodos')
        .then(function(kyoodos) {
          cb(null, kyoodos);
        })
        .catch(function(onRejected) {
          cb(onRejected, null);
        })
    }
  }
})();

module.exports = kyoodos
