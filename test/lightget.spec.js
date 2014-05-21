var chai = require("chai");
var expect = chai.expect;

var qwget = require("../index");

describe( 'qget', function() {
        var port = 6767;
        var url = {host: 'localhost', port: port, path: '/test'};
        var content = "Hello world";
        createServer(port);

        it('should be callable with a callback', function(done){
                qwget(url, function(res){
                        expect(res).to.equal(content);
                        done();
                    });
            });

        it('should be callable as a promise', function(done){
                qwget(url)
                .then(function (res){
                        expect(res).to.equal(content);
                        done();
                    });
            });
    });

function createServer(port){
    var s = require('http').createServer(function (req, resp) {
            s.emit(req.url, req, resp);
        });

    s.listen(port, function () {
            s.on('/test', function (req, res) {
                    res.writeHead(200);
                    res.write('Hello world');
                    res.end();
                });
        });
}
