"use strict";

var ip = '95.199.140.25';

var log = console.log;

log('Hello: ' + ip);

setTimeout(function() {
    log('Software Passion Summit');
}, 3000);

setInterval(function() {
    log('again');
}, 8000);

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
        log('Client connected');
        client.end('Sloth');
    });
}, 6000);

var express = require('express');
var app = express.createServer();
app.listen(4001);

app.get('/', function(req, resp) {
    log('/ called');
    resp.end('responding to /\n');
});

app.get('/tapir/:name', function(req, resp) {
    log('/tapir called with ' + req.params.name);
    resp.end('responding to /tapir with ' + req.params.name);
});

setInterval(function() {
    var request = require('request');
    request('http://localhost:4001/tapir/Arne');
}, 1000);

