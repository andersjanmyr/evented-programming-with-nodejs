"use strict";

var ip = '78.75.78.23';

var log = console.log;

log('Software Passion Summit');

setTimeout(function() {
    log(ip);
}, 2000);

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
        client.write('Douglas');
        log('Client connected');
    });
}, 4000);

var express = require('express');
var app = express.createServer();
app.listen(4001);

app.get('/', function(req, resp) {
    log('/');
    resp.end('Root\n');
});

app.get('/tapir/:name', function(req, resp) {
    log('Tapir with name ' + req.params.name);
    resp.end(req.params.name + '\n');
});

var request = require('request');

setInterval(function() {
    request('http://localhost:4001/tapir/Ada');
}, 1000);

