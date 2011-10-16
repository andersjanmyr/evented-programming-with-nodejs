!SLIDE 
# Modules

!SLIDE bullets
# Modules, builtin
* net (tcp/ip)
* http (createServer, request, ...)
* util (log, pump, inherits, ...)
* fs (readFile, readdir, rename, ...)
* events (EventEmitter)

!SLIDE smaller code
# EventEmitter

    @@@javascript
    var events = require('events');
    var util = require('util');
    Tapir = function() {

      this.swim = function(){
        this.emit("swimming");
      }

      this.eat = function(food) {
        console.log('Munching '  + food);
        this.emit('eating', food);
      }

    };
    // Set EventEmitter as Eventers prototype
    util.inherits(Eventer, events.EventEmitter);

!SLIDE smaller code
# EventEmitter, usage

    @@@javascript
    tapir = new Tapir();

    tapir.on('swimming', function() {
      console.log('It is swimming');
    });

    tapir.on('eating', function(food) {
      console.log('Stop feeding the tapir ' + food);
    });

!SLIDE small
# Modules, How?
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
    var module = { exports: {}};
    (function(module, exports){
        ...
    })(module, module.exports);


!SLIDE commandline
# npm, Node Package Manager

    $ curl http://npmjs.org/install.sh | sh
    $ npm install -g express
    mime@1.2.1 /usr/local/lib/node_modules/express/node_modules/mime
    connect@1.4.0 /usr/local/lib/node_modules/express/node_modules/connect
    qs@0.1.0 /usr/local/lib/node_modules/express/node_modules/qs
    /usr/local/bin/express -> /usr/local/lib/node_modules/express/bin/express
    express@2.3.2 /usr/local/lib/node_modules/express

!SLIDE bullets
# Node Module Repository

* http://search.npmjs.org
* ~1800 modules (May, 2011)
* ~2500 modules (June, 2011)
* ~3700 modules (Sept, 2011)
* ~4400 modules (Nov, 2011)

!SLIDE
# Notable External Modules

!SLIDE small
# Connect
## Rack for Node (middleware framework)

    @@@javascript
    connect(
          connect.logger()
        , connect.static(__dirname)
        , connect.compiler({enable: ['sass', 'coffeescript']})
        , connect.profiler()
      ).listen(3000);
    

!SLIDE small
# Express
## Sinatra for Node

    @@@javascript
    var app = express.createServer();
    app.listen(4000);

    app.get('/', function(req, req) {
      res.redirect('/index.html');
    });

    app.post('/quiz', function(req, res) {
      res.send(quiz.create().id.toString());
    });


!SLIDE bullets
# Templating Engines
* Jade    - Haml with JS flavor
* haml.js - Haml for Node
* Mu      - Mustache for Node
* jqtpl   - jQuery Templates for Node
* ejs     - Embedded Javascript
* eco     - Embedded Coffeescript
* +30 others

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
  

!SLIDE smaller
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

!SLIDE smaller
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

!SLIDE smaller
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

!SLIDE smaller
# Logging (Winston, Log-Buddy, Caterpillar, ...)

    @@@javascript
    // Logging with winston
    var winston = require('winston');

    winston.info('Hello distributed log files!');        

    // Add a file transport
    winston.add(winston.transports.File, { filename: 'somefile.log' });

    // Available transports apart from file
    // Mongo, Riak, Riak, ...

!SLIDE smaller
# DNode Server

    @@@javascript
    var dnode = require('dnode');

    var server = dnode({
        zing : function (n, cb) { cb(n * 100) }
    });
    server.listen(5050);
    
!SLIDE smaller
# DNode Client

    @@@javascript
    var dnode = require('dnode');

    dnode.connect(5050, function (remote) {
        remote.zing(66, function (n) {
            console.log('n = ' + n);
        });
    });

!SLIDE smaller
# Queues (beanstalk_client)

    @@@javascript
    var client = require('beanstalk_client').Client;

    client.connect('127.0.0.1:11300', function(err, conn) {
        var job_data = {"data": {"name": "node-beanstalk-client"}};
        var priority = 0;
        var delay = 5;
        var timeToRun = 1;
        conn.put(priority, delay, timeToRun, JSON.stringify(job_data), function(err, job_id) {
            console.log('put job: ' + job_id);
            process.exit();
        });
    });

!SLIDE smaller
# Queues Producer

    @@@javascript
    var client = require('beanstalk_client').Client;

    client.connect('127.0.0.1:11300', function(err, conn) {
        var reserve = function() {
            conn.reserve(function(err, job_id, job_json) {
                console.log('got job: ' + job_id);
                console.log('got job data: ' + job_json);
                console.log('module name is ' + JSON.parse(job_json).data.name);
                conn.destroy(job_id, function(err) {
                    console.log('destroyed job');
                    reserve();
                });
            });
        }

        reserve();
    });

!SLIDE smaller
# Packaging an NPM Module

    @@@javascript
    // package.json
    {
      "name": "express",
      "description": "Sinatra inspired web development framework",
      "version": "2.3.2",
      "author": "TJ Holowaychuk <tj@vision-media.ca>",
      "contributors": [ 
        { "name": "TJ Holowaychuk", "email": "tj@vision-media.ca" }, 
        { "name": "Guillermo Rauch", "email": "rauchg@gmail.com" }
      ],
      "dependencies": {
        "connect": ">= 1.4.0 < 2.0.0",
        "mime": ">= 0.0.1",
        "qs": ">= 0.0.6"
      },
      "keywords": ["framework", "sinatra", "web", "rest", "restful"],
      "repository": "git://github.com/visionmedia/express",
      "main": "index",
      "bin": { "express": "./bin/express" }
    }
      












