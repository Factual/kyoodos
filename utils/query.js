var parser = require('./parser');
var slackAPI  = require('./slack_webapi');

var query = (function() {

  var getUserFromDB = function(id) {
    var user;

    // check db, if exists, return
    if (user) {
      return user
    } else {
      // if not exists, find from slack API and save
      return _getUserInfo(id, function(userHash) {
        return _saveUserToDB(userHash)
      }
    }
  }

  // make API call
  var getUserInfo = function(id, cb) {
    var user = slackAPI.getUser(id, function(resp) {
      if (resp.ok) {
        cb(resp.user);
      } else {
        console.warn('Api call failed'); // TODO: error handling
      }
    })
  }

  // saves to DB and returns cleaned user opts
  var _saveUserToDB = function(userHash) {
    var user = {}
    return user;
  }

  var _saveKudoToDB = function(message, user) {
    // to do  
  }

  return {
    getUser: function(id, cb) {
      return getUserFromDB(id);
    },
    saveKudo: function(message) {
      var parsed = parser.parseMessage(message),
          user = getUser(message.user);

      // save to db
    },
    getKudo: function(params) {
      var from = params.from_user,
          to = params.to_user;
    }
  }
})();

module.exports = query;
