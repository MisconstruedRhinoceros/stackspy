var request = require('request');
var serverID = require('./server');
var clientID = require('./client');

var main = function(url) {

  console.log("Spying on", url, "...");

  request(url, function(err, response, body) {
    if(!err) {
      var server_results = serverID(response); 
      var client_results = clientID(body);

      /** Directly run has process.argv */
      if(process.argv) {
        console.log('\n');
        console.log("-----RESULTS-----");
       
        console.log("CLIENT SIDE: ");
        if(client_results.length) {
          console.log(client_results);
        }
        
        console.log("SERVER SIDE: ");
        if(server_results.length) {
          console.log(server_results);
        }
      
      /** No argv means we are imported */
      } else {
        return {
          server: server_results,
          client: client_results
        }
      }

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
