var querystring = require('querystring');
var https = require('https');

//FIXME: move to config file
var API_TOKEN = "xoxb-48865988387-7nZkKAhNLTSwoyqVwoLHUzki"; 
var HOST = 'https://slack.com/api';

var slackAPI = (function() {

  var _getRequest = function(endpoint, data, cb) {
    var path = HOST + '/' + endpoint + '?' + querystring.stringify(data) + '&token=' + API_TOKEN


    https.get(path, function(res) {
      var str = '';

      res.on('data', function (chunk) {
        str += chunk;
      });

      res.on('end', function () {
        console.log(str);
      });
    });
  }

  return {
    test: function(cb) {
      _getRequest('api.test', {}, cb);
    },
    getUser: function(id, cb) {
      var data = { user: id };
      _getRequest('users.info', data, cb);
    }
  }
})();

module.exports = slackAPI;
