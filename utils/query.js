var parser = require('./parser');
var slackAPI  = require('./slack_webapi');
var conn = require('../db/conn');
var squel = require("squel");
var squelPostgres = squel.useFlavour('postgres');

var query = (function() {
  // make API call
  var _getUserInfo = function(id, cb) {
    var user = slackAPI.getUser(id, function(resp) {
      console.log('slack user fetch', resp)
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
          console.log('got user', JSON.stringify(user));
          return user;
        }).catch(function(onRejected) {
          console.log('user not found', onRejected);
          // if not exists, find from slack API and save
          return _getUserInfo(id, function(userHash) {
            console.log(11111111111111);
            console.log(JSON.stringify(userHash));
            return _saveUserToDB(userHash);
          })
        })
  }

  // saves to DB and returns cleaned user opts
  var _saveUserToDB = function(userHash) {
    var q = squelPostgres.insert()
                         .into("slack_users")
                         .set("id", userHash.id)
                         .set("first_name", userHash.profile.first_name)
                         .set("last_name", userHash.profile.last_name)
                         .set("username", userHash.name)
                         .set("email", userHash.profile.email)
                         .set("avatar", userHash.profile.image_512 ||
                                        userHash.profile.image_192 ||
                                        userHash.profile.image_72 || "")
                         .toString()
    conn.execute(q);
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
      getUserFromDB(id, function (user) {
        cb(user)
      });
    },
    saveKudo: function(message, cb) {
      var parsed = parser.parseMessage(message);
      _saveKudoToDB(parsed);
      getUserFromDB(message.user);
    },
    getKudo: function(params) {
      var from = params.from_user,
        to = params.to_user;
    }
  }

})();

module.exports = query;
