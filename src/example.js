"use strict";

var ip = '213.50.11.10';

var log = console.log;

log('Hello');

setTimeout(function() {
    log('Software Passion Summit');
}, 5000);

setInterval(function() {
    log('Software Passion Summit again');
}, 1000);

var net = require('net');

var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        log('Data received: ' + data.toString());
        socket.write(data);
    });
});

server.listen(4000);

setInterval(function() {
    var client = net.connect(4000);
    client.on('connect', function() {
        log('Client Connected');
        client.write('client calling');
    }).on('data', function(data) {
        log('Client Data: ' + data);
        client.end();
    });
}, 2000);

var express = require('express');

var app = express.createServer();
app.listen(4001);

app.get('/', function(req, resp) {
    log('In the root handler');
    resp.end('I am ROOT\n');
});

app.get('/tapir/:name', function(req, resp) {
    log('Hello ' + req.params.name);
    resp.end('I am the tapir named ' + req.params['name']);
});

var request = require('request');

setInterval(function() {
   request('http://localhost:4001/tapir/lennart'); 
}, 500);

