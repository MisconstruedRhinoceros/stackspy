var cheerio = require('cheerio');

/**
 * Result object
 */
var result = {
  react: false,
  version: null,
  src: null,
}
module.exports = function(response) {
  var $ = cheerio.load(response);
  var $scripts = $('script');

  for(var i = 0; i < $scripts.length; i++) {
    
    if($scripts[i].attribs.src) {

      /**
       * Tilde is a quick way to transform -1
       * to false
       */
      if(~$scripts[i].attribs.src.indexOf('react')) {
        result.react = true;
        console.log('React: ', $scripts[i].attribs.src);
      }
    } else {
      
    }
  }

  return result;
}
