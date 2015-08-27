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
      if(~$scripts[i].attribs.src.indexOf('react')) {
        result.react = true;
        console.log('React: ', $scripts[i].attribs.src);
      }
    } else {
      
    }
  }
}
