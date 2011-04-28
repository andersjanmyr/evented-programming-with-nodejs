!SLIDE small
# An Echo Server

    @@@javascript
    // Echo Server
    var net = require('net');

    var server = net.createServer(function(socket) {
        socket.on('data', function(data) {
            console.log(data.toString());
            socket.write(data);
        });
    });
    server.listen(4000)

!SLIDE small

# An HTTP Server

    @@@javascript
    // HTTP Server
    var http = require('http');
    var web = http.createServer(function(request, response) {
      response.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      response.end('Tapirs are beautiful!\n');
    });
    web.listen(4001);


!SLIDE small execute
# Let's try it out

    @@@ruby
    [
      `curl localhost:4001`,
      `echo 'Hello beautiful tapir' | nc localhost 4000`
    ]
    





