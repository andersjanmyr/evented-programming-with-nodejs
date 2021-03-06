!SLIDE 
# Modules

!SLIDE bullets
# Modules, builtin
* net (tcp/ip)
* http (createServer, request, ...)
* util (log, pump, inherits, ...)
* fs (readFile, readdir, rename, ...)
* events (EventEmitter)

!SLIDE small code
# EventEmitter, usage

    @@@javascript
    tapir = new Tapir();

    tapir.on('eating', function(food) {
      console.log('Someone fed the tapir ' + food);
    });

    tapir.on('error', function(error) {
      console.log('What? ' + error);
    });

!SLIDE small code
# EventEmitter

    @@@javascript
    var events = require('events');
    var util = require('util');
    Tapir = function() {

      this.eat = function(food) {
        if (isMeat(food))
          this.emit('error', new Error("I'm a vegetarian"));
        else
          this.emit('eating', food);
      }

    };
    // Set EventEmitter as Tapir's prototype
    util.inherits(Tapir, events.EventEmitter);


!SLIDE small
# Modules, writing
    @@@javascript
    // module tapir.js

    // require another module
    var util = require('util');

    function eat(food) {
      util.log('eating '+ food);
    }
    
    // export a function
    exports.eat = eat;

!SLIDE small
#  Modules, how?

    @@@javascript
    function require(name) {

      var source = findSource(name);

      var module = { exports: {}};

      (function(module, exports){
          eval(source);
      })(module, module.exports);

      return module;
    }


!SLIDE commandline
# npm, Node Package Manager

    $ curl http://npmjs.org/install.sh | sh
    $ npm install -g express
    mime@1.2.1 /usr/local/lib/node_modules/express/node_modules/mime
    connect@1.4.0 /usr/local/lib/node_modules/express/node_modules/connect
    qs@0.1.0 /usr/local/lib/node_modules/express/node_modules/qs
    /usr/local/bin/express -> /usr/local/lib/node_modules/express/bin/express
    express@2.3.2 /usr/local/lib/node_modules/express

!SLIDE center

# Node Modules

![NPM Modules](npm-modules.png)

!SLIDE
# Notable External Modules


!SLIDE small
# Express
## Sinatra for Node

    @@@javascript
    var app = express();
    app.listen(4000);

    app.post('/tapirs', function(req, req) {
      Tapir.create(req.params);
      res.redirect('/tapirs');
    });

    app.put('/tapirs/:id', function(req, res) {
      res.send(Tapir.update(req.params.id));
    });

!SLIDE small
# Connect
## Rack for Node (middleware framework)

    @@@javascript
    connect(
          connect.logger()
        , connect.static(__dirname)
        , connect.compiler({enable: ['sass', 'coffeescript']})
        , connect.profiler()
        , everyauth.middleware()
      ).listen(3000);
    
!SLIDE small
# Request
## HTTP Client
    @@@javascript
    var request = require('request');
    request.put('http://anders.janmyr.com',
            function(err, resp, body) {
      if (!err && resp.statusCode === 200)
          console.log(body);
    })

    // Streaming
    request.get('http://google.com/img.png').pipe(
        request.put('http://mysite.com/img.png'))


!SLIDE bullets
# Templating Engines
* Jade     - Haml with JS flavor
* Mustache - Mustache for Node
* ejs      - Embedded Javascript
* eco      - Embedded Coffeescript
* +40 others

!SLIDE small
# Jade

    @@@python
    !!! 5
    html(lang="en")
      head
        title= pageTitle
        script(type='text/javascript')
          if (foo) {
            bar()
          }
      body
        h1 Jade - node template engine
        #container
          - if (youAreUsingJade)
            p You are amazing
          - else
            p Get on it!
  

!SLIDE small
# Socket.IO
## Websockets and more

    @@@javascript
    var http = require('http');
    var io = require('socket.io');

    server = http.createServer(function(req, res){...});
    server.listen(80);

    // socket.io attaches to an existing server
    var socket = io.listen(server);
    socket.on('connection', function(client){
      // new client is here!
      client.on('message', function(){ … })
      client.on('disconnect', function(){ … })
    });

!SLIDE small
# DB (MySql, Postgres, Oracle)

    @@@javascript
    client.query(
      'SELECT * FROM ' + TEST_TABLE,
      function(err, results, fields) {
        if (err) { throw err; }

        console.log(results);
        console.log(fields);
        client.end();
      }
    );

!SLIDE small
# NOSQL (MongoDB, CouchDB, Redis, Cassandra, Memcached, Hadoop, ...)

    @@@javascript
    // MongoDB
    var mongodb = require('mongodb');
    var server = new mongodb.Server("127.0.0.1", 27017, {});
    var client = new mongodb.Db('test', server, {});
    client.open(function (error, client) {
      if (error) throw error;
      var coll= new mongodb.Collection(client, 'documents');
      coll.find({}, {limit:10}).toArray(function(err, docs) {
        console.dir(docs);
      });
    });

!SLIDE small
# DNode Server

    @@@javascript
    var dnode = require('dnode');

    var server = dnode({
      zing : function (n, callback) {
        callback(n * 100);
      }
    });
    server.listen(5050);
    
!SLIDE small
# DNode Client

    @@@javascript
    var dnode = require('dnode');

    dnode.connect(5050, function (remote) {
        remote.zing(66, function (n) {
            console.log('n = ' + n);
            // Prints n = 6600;
        });
    });


!SLIDE bullets
# [Trello](https://trello.com/board/demo-board/4f6851dc9290fac27611d0ae)

* Node.js
* Express
* MongoDB

* jQuery
* Backbone
* Mustache




