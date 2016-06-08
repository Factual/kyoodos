var querystring = require('querystring');
var https = require('https');

//FIXME: move to config file
var API_TOKEN = "xoxb-48994206208-yGMA8JgKrMWga5xr8EhsB7gr";
var HOST = 'https://slack.com/api';

var slackAPI = (function() {

  var _getRequest = function(endpoint, data, cb) {
    var path = HOST + '/' + endpoint + '?' + querystring.stringify(data) + '&token=' + API_TOKEN;

    https.get(path, function(res) {
      var str = '';

      res.on('data', function (chunk) {
        str += chunk;
      });

      res.on('end', function () {
        cb(JSON.parse(str));
      });
    });
  }

  return {
    getUser: function(id, cb) {
      var data = { user: id };
      _getRequest('users.info', data, cb);
    }
  }
})();

module.exports = slackAPI;
