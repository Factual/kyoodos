var parser = {
  parseMessage: function(message) {
    var to_user = parseReceiver(message.text); 

    return {
      from_user_id: message.user,
      to_user_id: to_user,
      text: message.text,
      created_at: message.ts,
      content_raw: message
    }
  },

  // a direct message person: <@USLACKBOT>
  // returns an array of receivers
  parseReceiver: function(messageText) {
    return [] 
  }
}

module.exports = parser;
