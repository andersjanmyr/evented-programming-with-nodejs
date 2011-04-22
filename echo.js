// Echo Server
var net = require('net');

var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        console.log(data.toString());
        socket.write(data);
    });
});

server.listen(4000)

