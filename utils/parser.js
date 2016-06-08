var parser = {
  parseMessage: function(message) {
    var to_user = parseReceiver(message.text); 

    return {
      from_user_id: message.user,
      to_user_id: to_user,
      content_raw: message
      content: message.text,
      created_at: message.ts,
    }
  },

  // a direct message person: <@USLACKBOT>
  // returns an array of receivers
  parseReceiver: function(messageText) {
    var regex = /<@(.*?)>/;
    return regex.exec(messageText)[0]
  }
}

module.exports = parser;
