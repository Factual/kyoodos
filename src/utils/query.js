var parser = require('./parser');
var slackAPI  = require('./slack_webapi');
var conn = require('../db/conn');
var squel = require("squel").useFlavour('postgres');

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
    var q = squel.select()
                         .from("slack_users")
                         .where("id = ?", id)
                         .toString()

    conn.execute(q)
        .then(function(user) {
          if (user.length > 0) {
            return user;
          } else {
            // if not exists, find from slack API and save
            return _getUserInfo(id, function(userHash) {
              _saveUserToDB(userHash);
            });
          }
        }).catch(function(onRejected) {
          console.warn('query rejected', JSON.stringify(onRejected));
        });
  }

  // saves to DB and returns cleaned user opts
  var _saveUserToDB = function(userHash) {

    var avatar = userHash.profile.image_72 ||
      userHash.profile.image_192 ||
      userHash.profile.image_512 || ""
    // cannot stop squel converting ? to $1 :((
    // avatar = avatar.replace(/\?/, '[?]')

    var q = squel.insert()
      .into("slack_users")
      .set("id", userHash.id)
      .set("first_name", userHash.profile.first_name)
      .set("last_name", userHash.profile.last_name)
      .set("username", userHash.name)
      .set("email", userHash.profile.email)
      .set("avatar", avatar)
      .toString()
    return conn.execute(q);
  }
  var _saveKudoToDB = function(message) {
    var kyoodo_id_q = squel.select().field("nextval('kyoodo_id_seq')").toString()

    var _saveReceivers = function(receiver, kyoodo_id) {
      var q = squel.insert()
                    .into("kyoodos_receivers")
                    .set("to_user_id", receiver)
                    .set("kyoodo_id", kyoodo_id)
                    .toString()

      return conn.execute(q);
    }

    var saveKudoQuery = function(kyoodo_id) {
      var q = squel.insert()
              .into("kyoodos")
              .set("id", kyoodo_id)
              .set("from_user_id", message.from_user_id)
              .set("content_raw", message.content_raw)
              .set("content", message.content)
              .set("created_at",
                  "to_timestamp(" + message.created_at + ")",
                  { dontQuote: true })
              .toString()
      return q
    }

    return conn.execute(kyoodo_id_q)
      .then(function(postedData) {
        kyoodo_id = postedData.length > 0 ? postedData[0].nextval : null
        to_users_list = parser.parseToUsers(message.content)

        // save kudo
        conn.execute(saveKudoQuery(kyoodo_id))
        // populate kudos_receivers table
        for(var i=0; i<to_users_list.length; i++) {
          _saveReceivers(to_users_list[i], kyoodo_id)
        }

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
      parsed.to.concat([message.user]).forEach(function(id) {
        getUserFromDB(id);
      });
    },
    getKudo: function(params) {
      var from = params.from_user,
        to = params.to_user;
    }
  }

})();

module.exports = query;
