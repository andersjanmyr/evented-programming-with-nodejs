"use strict";

var log = console.log;

log('Hello Scandev');

setTimeout(function() {
    log('After a while');
}, 4000);

setInterval(function() {
    log('Again');
}, 10000);

var net = require('net');
var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        log(data.toString());
        socket.write(data);
    });
});
server.listen(4000);

setInterval(function() {
    var client = net.connect(4000);
    client.on('connect', function() {
        client.write('Tapir');
        log('client wrote Tapir');
    });
}, 5000);

var express = require('express');
var app = express.createServer();

app.listen(4001);

app.get('/', function(req, resp) {
    console.log('/ accessed');
    resp.end('response from /\n');
});

app.get('/tapir/:name', function(req, resp) {
    console.log('Tapir called with param ' + req.params.name);
    resp.end('The name of the tapir is: ' + req.params.name);
});

var request = require('request');

setInterval(function() {
    request('http://localhost:4001/tapir/Scandev');
}, 1000);

