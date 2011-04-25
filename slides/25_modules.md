!SLIDE 
# Modules
    @javascript
    // tapir.js
    var util = require ('util');
    
    function eat(food) {
        util.log('eating '+ food);
    }

    exports.eat = eat;


!SLIDE 
#  Modules, How?

    @javascript
    var module = { exports: {}};
    (function(module, exports){
        ...
    })(module, module.exports);
    

!SLIDE command-line
# npm, Node Package Manager

    $ npm install express


!SLIDE 
# Notable Libraries

!SLIDE 
# Connect

!SLIDE 
# Express

!SLIDE 
# Jade



!SLIDE 
# SocketIO

!SLIDE 
# Mongoose















