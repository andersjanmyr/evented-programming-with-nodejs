"use strict";
var ip = '213.50.11.10';


var log = console.log;

log('hello');

setTimeout(function() {
    log('Software Passion Summit');
}, 1000);


setInterval(function() {
    log('again');
}, 5000);

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
        client.end('Client');
    });
}, 3000);

var express = require('express');

var app = express.createServer();
app.listen(4001);

app.get('/', function(req, resp) {
    log('ROOT called');
    resp.end('ROOT');
});

app.get('/tapir/:name', function(req, resp) {
    log('A tapir named ' + req.params.name);
    resp.end('Hello ' + req.params.name);
});


var request = require('request');
setInterval(function() {
    request('http://localhost:4001/tapir/Lennart');
}, 1000);

