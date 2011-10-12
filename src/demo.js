
setInterval(function() { console.log('Scandev'); }, 1000);
setInterval(function() { console.log('on Tour'); }, 2000);

console.log('Hello');

var net = require('net');

var echoServer = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log(data.toString());
    socket.write(data);
  });
});

echoServer.listen(4000);

var express = require('express');

var app = express.createServer();

app.listen(4001);

app.get('/', function(req, resp) {
  console.log(req.headers);
  resp.end('from http\n');
});


// Start with console.log
// Add a setTimeout
// Add another
// Change to interval
// Add an echo server
// listen to port 4000
// Start up the server
// nc localhost 4000
// Switch to nodemon
//
