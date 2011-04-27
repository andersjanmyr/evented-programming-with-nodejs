!SLIDE
# Caveats

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

!SLIDE small
# Nesting (callbacks)

    @@@javascript
    function rideTapir(name, callback) {
      findTapir(name, function(err, tapir) {
        groomTapir(tapir, function(err) {
          ride(tapir, callback);
        }
      }
    }

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



!SLIDE
# Exceptions

!SLIDE small
# Sequencing

    @@@javascript
    function doInSequence(collection, callback) {
        var queue = collection.slice(0); // Duplicate

        (function iterate() {
          if (queue.length === 0) return callback();
          var elem = queue.slice(0, 1)[0];

    };



!!SLIDE small
# Tail Recursion

    @@@javascript









