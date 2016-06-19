var API_TOKEN = process.env.SLACK_API_TOKEN || 'xoxb-48994206208-yGMA8JgKrMWga5xr8EhsB7gr';
var RtmClient = require('@slack/client').RtmClient;
var query = require('./utils/query');
var slackAPI = require('./utils/slack_webapi');


// connect to slack's real time message api
var clientOpts = {logLevel: ''};
if (process.env.http_proxy) {
  var HttpsProxyAgent = require('https-proxy-agent');
  var WebSocket = require('ws');
  clientOpts.socketFn = function (socketUrl) {
    var wsOpts = {
      agent: new HttpsProxyAgent(process.env.http_proxy)
    };

    return new WebSocket(socketUrl, wsOpts);
  }
}
var rtm = new RtmClient(API_TOKEN, clientOpts);
rtm.start();

var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
  console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
});

// Listens to all `message` events from the team
rtm.on(RTM_EVENTS.MESSAGE, function (message) {
  if (message.type == 'message') {
    console.log("This is a message", JSON.stringify(message));
    query.saveKudo(message);
  }
});
