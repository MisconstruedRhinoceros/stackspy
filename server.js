/** 
 * Globals
 */
var SERVER_MODULES = __dirname + '/modules/server/';

/**
 * Load up all modules here
 */
var modules = [];
var guesses = {};

for(var i = 0; i < modules.length; i++) {
  try {
    guesses[modules[i]] = require(SERVER_MODULES + modules[i]);
  } catch(e) {
    console.log('[!!!] ERROR loading module', modules[i]);
    console.log('\t->', e.message);
  }
}


/**
 * This function takes in a response object and
 * iterates to all modules loaded, passing the
 * response object to each of them.
 *
 * In the future, there will be more logic
 */
module.exports = function(response) {

  for(var key in guesses) {
    guesses[key](response);
  }
}
