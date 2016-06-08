
var parser = (function(){
  return {
    parseMessage: function(message) {
      return {
        from_user_id: message.user,
        content_raw: JSON.stringify(message),
        content: message.text,
        created_at: message.ts
      }
    }
  }

})()

module.exports = parser;
