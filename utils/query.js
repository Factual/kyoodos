var parser = require('./parser');
var slackAPI  = require('./slack_webapi');
var conn = require('../db/conn');

var query = (function() {

  // make API call
  var _getUserInfo = function(id, cb) {
    var user = slackAPI.getUser(id, function(resp) {
      if (resp.ok) {
        cb(resp.user);
      } else {
        console.warn('Api call failed'); // TODO: error handling
      }
    })
  }

  var getUserFromDB = function(id) {
    conn.execute('SELECT * FROM users WHERE id=' + id)
      .then(function(user) {
        return user;
      }).catch(function(onRejected) {
        // if not exists, find from slack API and save
        return _getUserInfo(id, function(userHash) {
          return _saveUserToDB(userHash);
        })
      })
  }

  // saves to DB and returns cleaned user opts
  var _saveUserToDB = function(userHash) {
    var user = {
      id: userHash.id,
      username: userHash.name,
      email: userHash.profile.email,
      avatar: userHash.profile.image_72
    };
    var valuesToInsert = _getObjValues(user);

    conn.execute('INSERT INTO users VALUES (' + valuesToInsert.join(', ') + ')');
    return user;
  }

  var _saveKudoToDB = function(message) {
    var valuesToInsert = _getObjValues(message);

    conn.execute('INSERT INTO kyoodos VALUES (' + valuesToInsert.join(', ') + ')')
      .then(function(postedData) {
        return postedData;
      }).catch(function(err) {
        throw err;
      })
  }

  var _getObjValues = function(obj) {
    var arr = [];
    for (k in obj) {
      arr.push(obj[k])
    }
    return arr;
  }

  return {
    getUser: function(id, cb) {
      return getUserFromDB(id);
    },
    saveKudo: function(message) {
      var parsed = parser.parseMessage(message),
          user = getUserFromDB(message.user);
      _saveKudoToDB(parsed);
    },
    getKudo: function(params) {
      var from = params.from_user,
          to = params.to_user;
    }
  }

})();

module.exports = query;
