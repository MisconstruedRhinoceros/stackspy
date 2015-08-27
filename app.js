var request = require('request');
var serverID = require('./server');
var clientID = require('./client');

var main = function(url) {

  console.log("Spying on", url, "...");
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
  if(process.argv.length < 3) {
    console.log("ERROR: You must supply a url");
    return;
  }
  main(process.argv[2]);
}
module.exports = main;
