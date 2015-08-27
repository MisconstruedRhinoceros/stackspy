var cheerio = require('cheerio');

/**
 * Result object
 */
var result = {
  name: 'jquery',
  found: false,
  version: null,
  src: null,
}
module.exports = function(response) {
  var $ = cheerio.load(response);
  var $scripts = $('script');

  for(var i = 0; i < $scripts.length; i++) {
    if($scripts[i].attribs.src){
      //Analyze src 

      /**
       * jQuery is in src url
       * tilde converts -1 to false
       */
      if(~$scripts[i].attribs.src.indexOf('jquery')) {
        result.found = true;
        console.log('jQuery: ', $scripts[i].attribs.src);
      }
    } else {
      //Parse inline script
    }
  }

  return result;
}
