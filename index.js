var Q = require('q');
var http = require('http');

var httpGet = function (opts) {
     var deferred = Q.defer();
     http.get(opts, deferred.resolve).on('error', function (e) {
             console.log("wget error (http.get): " + e.message);
             console.log(opts);
                deferred.reject(e);
            });
     return deferred.promise;
};

var wget = function (url, callback){
    return httpGet(url).then(function(res){
            var deferred = Q.defer();
            var body = "";
            res.on("data", function (chunk) {
                    body += chunk;
                });
            res.on("end", function () {
                    deferred.resolve(body);
                    if (callback !== undefined) {
                        callback(body);
                    }
                });
            return deferred.promise;
        });
};

module.exports = wget;
