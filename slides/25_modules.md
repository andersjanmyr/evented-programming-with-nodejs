!SLIDE
# Modules
    @javascript
    // tapir.js
    var util = require ('util');

    function eat(food) {
        util.log('eating '+ food);
    }

    exports.eat = eat;


!SLIDE
#  Modules, How?

    @javascript
    var module = { exports: {}};
    (function(module, exports){
        ...
    })(module, module.exports);


!SLIDE command-line
# npm, Node Package Manager

    $ npm install express


!SLIDE
# Notable Libraries

!SLIDE
# Connect

!SLIDE
# Express

!SLIDE
# Jade



!SLIDE small
# SocketIO

    @@@javascript
    var http = require('http'),

    server = http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hello world</h1>');
    });
    server.listen(80);

    // socket.io
    var socket = io.listen(server);
    socket.on('connection', function(client){
      // new client is here!
      client.on('message', function(){ … })
      client.on('disconnect', function(){ … })
    });

!SLIDE
# Mongoose















