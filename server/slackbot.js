var API_TOKEN = "xoxb-48865988387-7nZkKAhNLTSwoyqVwoLHUzki";
var Botkit = require('./node_modules/botkit/lib/Botkit.js');
var os = require('os');

var slackbot = (function() {
  var controller = Botkit.slackbot({
      debug: true,
  });

  var bot = controller.spawn({
      token: API_TOKEN
  }).startRTM();

  controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', function(bot, message) {
    console.log("hello this is a message", bot, JSON.stringify(message));
  });
})()


module.exports = slackbot;
