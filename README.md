StackSpy
---------------------

This plugin identifies what technologies comprise a web
app's stack. 



## Design
The main file takes in a url and returns an object of results.
Should a non fatal error occur, the object will contain an error flag
set to true.

For sanity:
All technology names are lowercased regardless of official spelling.
The ending 'js' in JavaScript technologies are dropped.

If you don't agree with this convention, we can have an empathetic
feedback session where we discuss the merits of this approach, and then
change nothing.

ex: 
```
  node app.js url1

  /** returned */
  { jquery:
    { version: X.X.XX,
      source: 'url',
    },
    backbone: {
      version: X.X.XX,
      source: 'url',
    },
    express: {
      certainty: /** 0-1 */,
    },
  }  
```

Error eg:
```
  node app.js http://example.com

  /** returned */
  { error: true,
    message: "Unable to resolve url"
  }
```

### Client
The client-side technologies are identified by parsing content returned
from from HTTP requests.

A request (or series of requests) are made and each request gets passed
off to modules which determine if particular technologies are present
client side. 

Each module should expect a response object straight from an HTTP request 
made by the request node module.

Each module should return an object that contains the technology tested for,
if that technology was found, and if so, the source url and version for that technology.

eg:
```
  { backbone:
    { found: false}
  } 

  /** OR */
  {  react:
    { found: true,
      version: X.X.XX,
      source: cdnjs.com/foo/bar/react.min.js,
    }
  }
```

###Server
The server-side technologies are teased out by piecing together various clues, using 
the url of the website to interrogate the server.

Each module recieves the url against which it should work. 

Each module should return an object with the technology it was checking against, the
certainty it found that technology on a 0-1 scale, versioning information, and plugin/middleware
information dependent on the technology.

eg:
``` 
  { rails:
    { certainty: 0.1,
      version: null
    }
  }

  /** OR */
  
  { node:
    { certainty: 0.7,
      version: X.X.XX,
      misc: {
        middleware: express,
      }
    }
  }
```

###Certainty
The working definition of certainty is (number of clues hitting positive) / (total number of clues run for that tech).

This definition will advance as the project does.
