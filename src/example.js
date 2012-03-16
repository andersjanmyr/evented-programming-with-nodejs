"use strict";
var ip = '212.247.10.33';

var log = console.log;

log('Hello');

setTimeout(function() {
  log('Scandev');
}, 2000);

setInterval(function() {
  log('on Tour');
}, 3000);

var net = require('net');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    log(data.toString());
    socket.write(data);
  });
});

server.listen(4000);


var client = net.createConnection(4000);

setInterval(function() {
  client.on('connect', function() {
    log('Client');
    client.write('Tapir');
  });
  
}, 1500);


var express = require('express');

var app = express.createServer();

app.listen(4001);

app.get('/', function(req, resp) {
  log('/');
  resp.end('Hello From Express');
});

var request = require('request');

setInterval(function() {
  request('http://localhost:4001/');
}, 1000);

