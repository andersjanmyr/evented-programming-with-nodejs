// 88.131.106.162
//

var log = console.log;

log('Hello');

setTimeout(function() { log('Scandev'); }, 1000);
setInterval(function() { log('on Tour'); }, 2000);


var net = require('net');

var echoServer = net.createServer(function(socket) {
  socket.on('data', function(data) {
    log(data.toString());
    socket.write(data);
  });
});

echoServer.listen(4000);

echoClient = net.createConnection(4000);
echoClient.on('connect', function() {
  setInterval(function() {
    echoClient.write('echo from client');
  }, 5000);
});


var express = require('express');

var app = express.createServer();

app.listen(4001);

app.get('/:name', function(req, resp) {
  log(req.params.name + ' from http');
  resp.end(req.params.name + ' from http\n');
});

var request = require('request');

setInterval(function() {
  request('http://localhost:4001/fromHttpClient', function(err, response, body) {
    if (err) log(err);
  })
}, 3000);


// Start with REPL
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
