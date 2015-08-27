var request = require('request');
var serverID = require('./server');
var clientID = require('./client');

var testSites = ['https://www.airbnb.com',
                 'https://asana.com',
                 'https://www.atlassian.com',
                 'https://www.bbc.com',
                 'https://www.cloudflare.com',
                 'https://www.facebook.com',
                 'https://imgur.com',
                 'https://instagram.com',
                 'https://www.khanacademy.org',
                 'https://www.kissmetrics.com',
                 'https://www.netflix.com',
                 'https://www.pivotaltracker.com',
                 'https://www.quizup.com/en',
                 'https://www.reddit.com',
                 'https://www.squarespace.com'
                ];
var main = function(url) {

  var client_results = [];
  var server_results = [];

  for(var i = 0; i < testSites.length; i++) {
    request(testSites[i], function(err, response, body) {
      if(!err) {
        server_results.push(serverID(response)); 
        client_results.push(clientID(body));
      } else {
        console.log(err);
      }
    });
  }
}

if(require.main === module) {
  main();
}
module.exports = main;
