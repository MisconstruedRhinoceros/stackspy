/**
 * Globals
 */
var CLIENT_MODULES = __dirname + '/modules/client/';

/**
 * Load up all of the client side modules here
 */
var modules = ['jquery', 'react'];
var guesses = {};

for(var i = 0; i < modules.length; i++) {
  try {
    guesses[modules[i]] = require(CLIENT_MODULES + modules[i]);
  } catch(e) {
    console.log('[!!!] ERROR loading module ', modules[i]);
    console.log('\t->', e.message);
  }
}

/**
 * Pass the response object to each module 
 * we want to check for a technology.
 *
 * For now this simply iterates, but in the
 * future more logic will exist in here that
 * aggregates all of the results and
 * intelligently passes them on
 */
module.exports = function(response) {
  var results = [];

  for(var key in guesses) {
    guesses[key](response);
    //var result = guesses[key](response);
    //console.log(result);
    //if(result[guesses[key]] === true) {
    //  results.push(result);
    //}
  }

  return results;
}
