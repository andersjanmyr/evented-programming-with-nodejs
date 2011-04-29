!SLIDE
# Modules
    @@@javascript
    // tapir.js
    var util = require ('util');

    function eat(food) {
        util.log('eating '+ food);
    }

    exports.eat = eat;

!SLIDE bullets
# Modules, builtin
* net (tcp/ip)
* http (createServer, request, response)
* util (log, pump, inherits, ...)
* fs (readFile, readdir, rename, ...)
* events (EventEmitter)

!SLIDE
#  Modules, How?

    @javascript
    var module = { exports: {}};
    (function(module, exports){
        ...
    })(module, module.exports);


!SLIDE command-line
# npm, Node Package Manager

    $ npm install -g express
    mime@1.2.1 /usr/local/lib/node_modules/express/node_modules/mime
    connect@1.4.0 /usr/local/lib/node_modules/express/node_modules/connect
    qs@0.1.0 /usr/local/lib/node_modules/express/node_modules/qs
    /usr/local/bin/express -> /usr/local/lib/node_modules/express/bin/express
    express@2.3.2 /usr/local/lib/node_modules/express

!SLIDE bullets
# Node Module Repository

* http://npm.mape.me/
* 1800+ modules

!SLIDE
# Notable Libraries

!SLIDE small
# Connect
## Middleware framework for node

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
* ejs     - Embedded Javascript
* haml.js - Haml for Node
* Mu      - Mustache for Node
* jqtpl   - jQuery Templates for Node
* Jade    - Similar to Haml
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
# SocketIO

    @@@javascript
    var http = require('http'),

    server = http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hello world</h1>');
    });
    server.listen(80);

    // socket.io
    var socket = io.listen(server);
    socket.on('connection', function(client){
      // new client is here!
      client.on('message', function(){ … })
      client.on('disconnect', function(){ … })
    });

!SLIDE
# Mongoose















