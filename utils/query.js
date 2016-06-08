var parser = require('./parser');
var slackAPI  = require('./slack_webapi');
var conn = require('../db/conn');
var squel = require("squel");
var squelPostgres = squel.useFlavour('postgres');

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
    var q = squelPostgres.select()
                         .from("slack_users")  
                         .where("id = " + id)
                         .toString()

    conn.execute(q)
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
    var q = squelPostgres.insert()
                         .into("slack_users")
                         .set("id", userHash.id)
                         .set("username", userHash.name)
                         .set("email", userHash.profile.email)
                         .set("avatar", userHash.profile.image_72 || "")
                         .toString()
    console.log('q', query);
    conn.execute(q);
    return user;
  }

  var _saveKudoToDB = function(message) {
    var q = squelPostgres.insert()
                         .into("kyoodos")
                         .set("from_user_id", message.from_user_id)
                         .set("content_raw", message.content_raw)
                         .set("content", message.content)
                         .set("created_at",
                              "to_timestamp(" + message.created_at + ")",
                              { dontQuote: true })
                         .toString()
    console.log(q); 
    conn.execute(q)
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
