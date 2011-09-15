!SLIDE 
# Modules

!SLIDE bullets
# Modules, builtin
* net (tcp/ip)
* http (createServer, request, ...)
* util (log, pump, inherits, ...)
* fs (readFile, readdir, rename, ...)
* events (EventEmitter)

!SLIDE small
# Modules
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

!SLIDE bullets incremental
# Node Module Repository

* http://search.npmjs.org
* ~1800 modules (May 6th, 2011)
* ~2500 modules (June, 22nd, 2011)
* ~3700 modules (Sept, 10th, 2011)


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
  

!SLIDE small
# Mu - Mustasch

    @@@html
    <h1>{{header}}</h1>
    {{#bug}}
    {{/bug}}

    {{#items}}
      {{#first}}
        <li><strong>{{name}}</strong></li>
      {{/first}}
      {{#link}}
        <li><a href="{{url}}">{{name}}</a></li>
      {{/link}}
    {{/items}}

    {{#empty}}
      <p>The list is empty.</p>
    {{/empty}}
        

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
# MySql

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
# Mongoose, Schema

    @@@javascript
    var Schema = mongoose.Schema
      , ObjectId = Schema.ObjectId;

    var BlogPost = new Schema({
        author    : ObjectId
      , title     : String
      , body      : String
      , date      : Date
    });
    
!SLIDE small
# Mongoose, Usage

    @@@javascript
    var BlogPost = mongoose.model('BlogPost');
   
    // Save
    var post = new BlogPost();
    post.author = 'Stravinsky';
    instance.save(function (err) {
      //
    });

    // Find
    BlogPost.find({}, function (err, docs) {
      // docs.forEach
    });
        
!SLIDE small
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
      "bin": { "express": "./bin/express" },
      "engines": { "node": ">= 0.4.1 < 0.5.0" }
    }
      












