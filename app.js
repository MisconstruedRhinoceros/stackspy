var request = require('request');
var serverID = require('./server');
var clientID = require('./client');

var main = function(url) {

  var client_results = [];
  var server_results = [];

  request(url, function(err, response, body) {
    if(!err) {
      server_results.push(serverID(response)); 
      client_results.push(clientID(body));
    } else {
      console.log(err);
    }
  });
}

if(require.main === module) {
  main(process.argv[2]);
}
module.exports = main;
