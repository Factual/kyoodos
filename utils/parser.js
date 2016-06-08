var parser = (function(){
  // a direct message person: <@USLACKBOT>
  // returns an array of receivers
  var parseReceiver = function(messageText) {
    var r = /<@(.*?)>/;
    var matched = r.exec(messageText)
    if (matched && matched.length >= 2) {
      return matched[1]; // FIXME -- may have 1+ receiver
    } else {
      return "" // FIXME -- should not be saved  -- not a kyoodo to someone
    }
  }

  return {
    parseMessage: function(message) {
      var to_user = parseReceiver(message.text); 

      return {
        from_user_id: message.user,
        to_user_id: to_user,
        content_raw: JSON.stringify(message),
        content: message.text,
        created_at: message.ts
      }
    }
  }

})()

module.exports = parser;
