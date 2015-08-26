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

for(var i = 0; i < testSites.length; i++) {
  request(testSites[i], function(err, response, body) {
    if(!err) {
      serverID(response); 
      clientID(body);
    } else {
      console.log(err);
    }
    console.log('\n');
  });
}



