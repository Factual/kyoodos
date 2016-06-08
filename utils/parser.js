var parser = (function(){
  return {
    parseToUsers: function (text) {
      var matches = text.match(/<@.{9}>/g) || [];
      return matches.map(function (m) {
        return m.match(/<@(.{9})>/)[1];
      });
    },
    parseMessage: function(message) {
      return {
        from_user_id: message.user,
        content_raw: JSON.stringify(message),
        content: message.text,
        created_at: message.ts,
        to: this.parseToUsers(message.text)
      }
    }
  }

})()

module.exports = parser;
