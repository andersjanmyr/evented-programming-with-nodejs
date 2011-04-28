

// Echo Server
var net = require('net');

var echo = net.createServer(function(socket) {
    socket.on('data', function(data) {
        console.log(data.toString());
        socket.write(data);
    });
});

echo.listen(4000)

// HTTP Server
var http = require('http');
var util = require('util');
var web = http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  var message = 'Tapirs are beutiful!';
  console.log(message)
  response.end(message + '\n');
});
web.listen(4001);
