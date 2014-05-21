# qget 

A simple wget utility, compatible with q promises.

## Usage

``` javascript
var qget = require('qget');
var url = {host: 'bourcereau.fr', path: '/'};

#With a callback
qget(url, function(res){
    console.log(res);
});

#With a promise
qget(url)
.then(function(res){
    console.log(res);
});
```

