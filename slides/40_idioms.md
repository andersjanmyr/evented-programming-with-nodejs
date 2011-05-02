!SLIDE
# Idioms for Node

!SLIDE
# Callbacks

!SLIDE small
# Fall Through (callbacks)

    @@@javascript
    // What's wrong with this code?
    function doSomething(response, callback) {
      doSomeAsyncCall('abc', 123, function(err, result) {
        if (err) {
          callback(err);
        }
        callback(null, result);
      });
    }

!SLIDE small
# Fall Through (callbacks)

    @@@javascript
    // Add return statements
    function doSomething(response, callback) {
      doSomeAsyncCall('abc', 123, function(err, result) {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      });
    }

!SLIDE
# Nesting (callbacks)

    @@@javascript
    function rideTapir(name, callback) {
      findTapir(name, function(err, tapir) {
        groomTapir(tapir, function(err) {
          ride(tapir, callback);
        }
      }
    }

!SLIDE
# Nesting (callbacks)

    @@@javascript
    // Step Down Rule (Clean Code)
    function rideTapir(name, callback) {
      findTapir(name, groom);

      function groom(err, tapir) {
          groomTapir(tapir, rideCallback);
      }

      function rideCallback(err) {
        ride(tapir, callback);
      }
    }

!SLIDE small
# Exceptions
    @@@javascript
    function insertIntoTable(row, callback(err, data) {
      if (err) return callback(err);
      ...

      // Everything is OK
      return callback(null, 'row inserted');
    }



!SLIDE
# Collections
    @@@javascript
    function doAll(collection, callback) {
      var left = collection.length;
      collection.forEach(function(fun) {
        fun(function() {
          if (--left == 0) callback();
        });
      });
    };

!SLIDE execute small
# Call doAll
    @@@javascript
    // What does this code do?
    var r = [];
    doAll([
      function(callback) { 
        setTimeout(function() {r.push(1); callback();}, 2000 )},
      function(callback) { 
        setTimeout(function() {r.push(2); callback();}, 3000 )},
      function(callback) { 
        setTimeout(function() {r.push(3); callback();}, 1000 )}
      ], function() { alert(r); });
 




!SLIDE small
# Sequencing

    @@@javascript
    function doInSequence(collection, callback) {
        var queue = collection.slice(0); // Duplicate

        function iterate() {
          if (queue.length === 0) return callback();
          var fun = queue.splice(0, 1)[0];
          fun(function(err) {
            if (err) throw err; 
            iterate();
          });
        }
        iterate();
    };



!SLIDE small
# Sequencing
## with tail recursion (kind of)

    @@@javascript
    function doInSequence(collection, callback) {
        var queue = collection.slice(0); // Duplicate

        function iterate() {
          if (queue.length === 0) return callback();
          var fun = queue.splice(0, 1)[0];
          fun(function(err) {
            if (err) throw err; 
            process.nextTick(iterate);
          });
        }
        iterate();
    };


!SLIDE execute small
# Call doInSequence
    @@@javascript
    // What does this code do?;
    var r = [];
    doInSequence([
      function(callback) { 
        setTimeout(function() {r.push(1); callback();}, 2000 )},
      function(callback) { 
        setTimeout(function() {r.push(2); callback();}, 3000 )},
      function(callback) { 
        setTimeout(function() {r.push(3); callback();}, 1000 )}
      ], function() { alert(r); });
 

!SLIDE small
# Futures 
    @@@javascript
    var join = Futures.join(),
      fs = [ Futures.future(), Futures.future()],
      e;

    setTimeout(function () { fs[1].deliver(e, "World"); }, 100);
    setTimeout(function () { fs[0].deliver(e, "Hello"); }, 500);

    join.add(fs);

    join.when(function (f0Args, f1Args, f2Args) {
      console.log(f1Args[1], f2Args[1], f3Args[1], f2Args[2]);
    });

