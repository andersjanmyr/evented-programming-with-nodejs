"use strict";

var log = console.log;

log('Hello Devcon');

setInterval(function() {
    log('again');
}, 30000);

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
        client.end('From tcp client');
        log('Tcp client connecting');
    });
}, 9000);

var express = require('express');
var app = express();

app.listen(4001);

app.get('/', function(req, resp) {
    log('/ requested');
    resp.end('ROOT');
});

app.get('/tapir/:name', function(req, resp) {
    log('Tapir named ' + req.params.name);
    resp.end("I'm the tapir named " + req.params.name);
});

var request = require('request');
setInterval(function() {
    request('http://localhost:4001/tapir/Thomas');
}, 1000);

