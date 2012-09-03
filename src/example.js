"use strict";

var log = console.log;
log('Hello Devcon');

setTimeout(function() {
    log('Hello Again');
}, 4000);

setInterval(function() {
    log('Again');
}, 6000);


var net = require('net');
var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        log(data.toString());
        socket.write(data);
    });
});

server.listen(4000);

setInterval(function() {
    var client = net.connect({port: 4000});
    client.on('connect', function() {
        log('Client connected');
        client.end('Hello from client');
    });
}, 1000);

var express = require('express');
var app = express();
app.listen(4001);

app.get('/', function(req, resp) {
    log('Root called via http');
    resp.end('Hello from express');
});

app.get('/tapir/:name', function(req, resp) {
    log('Tapir called with name ' + req.params.name);
    resp.end('A tapir named ' + req.params.name);
});

var request = require('request');

setInterval(function() {
    log('Making client HTTP request');
    request('http://localhost:4001/tapir/Arne');
}, 1000);

