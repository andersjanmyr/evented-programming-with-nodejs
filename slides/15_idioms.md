!SLIDE
# Idioms for Node

!SLIDE
# Callbacks

!SLIDE smaller
# Fall Through (callbacks)

    @@@javascript
    // What's wrong with this code?
    function doSomething(response, callback) {
      doSomeAsyncCall('abc', 123, function(err, result) {
        if (err)
          callback(err);

        callback(null, result);
      });
    }

!SLIDE smaller
# Fall Through (callbacks)

    @@@javascript
    // Add return statements
    function doSomething(response, callback) {
      doSomeAsyncCall('abc', 123, function(err, result) {
        if (err)
          return callback(err);

        return callback(null, result);
      });
    }

!SLIDE smaller
# Exceptions
    @@@javascript
    function insertIntoTable(row, function(err, data) {
      if (err) return callback(err);
      ...

      // Everything is OK
      return callback(null, 'row inserted');
    }



!SLIDE smaller
# Parallel Execution
    @@@javascript
    function doAll(collection, callback) {
      var remaining = collection.length;
      collection.forEach(function(fun) {
        fun(function() {
          if (--remaining == 0) callback();
        });
      });
    };

!SLIDE execute smaller
# Call doAll
    @@@javascript
    // How long does this code take?
    var r = [];
    doAll([
      function(callback) { 
        setTimeout(function() {r.push(1); callback();}, 2000 )},
      function(callback) { 
        setTimeout(function() {r.push(2); callback();}, 3000 )},
      function(callback) { 
        setTimeout(function() {r.push(3); callback();}, 1000 )}
      ], function() { alert(r); });
 




!SLIDE smaller
# Sequencing

    @@@javascript
    function doInSequence(collection, callback) {
        var queue = collection.slice(0); // Duplicate

        function iterate() {
          if (queue.length === 0) return callback();
          var fun = queue.splice(0, 1)[0];
          fun(function(err) {
            if (err) throw err; 
            iterate();  // May build up a large stack
          });
        }
        iterate();
    };



!SLIDE smaller
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
            process.nextTick(iterate); // No stack
          });
        }
        iterate();
    };


!SLIDE execute smaller
# Call doInSequence
    @@@javascript
    // How long does this code take?
    var r = [];
    doInSequence([
      function(callback) { 
        setTimeout(function() {r.push(1); callback();}, 2000 )},
      function(callback) { 
        setTimeout(function() {r.push(2); callback();}, 3000 )},
      function(callback) { 
        setTimeout(function() {r.push(3); callback();}, 1000 )}
      ], function() { alert(r); });
 


!SLIDE smaller
# async

    @@@javascript
    async.map(['file1','file2'], fs.stat, function(err, results){
        // results is now an array of stats for each file
    });

    async.filter(['file1','file2'], path.exists, function(results){
        // results now equals an array of the existing files
    });

    async.parallel([
        function(){ ... },
        function(){ ... }
    ], callback);

    async.series([
        function(){ ... },
        function(){ ... }
    ], callback);




