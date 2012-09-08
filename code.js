function doAll(collection, callback) {
  var left = collection.length;
  collection.forEach(function(fun) {
    fun(function() {
      if (--left == 0) callback();
    });
  });
};

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

function Y(X) {
  return (function(procedure) {
    return X(function(arg) {
      return procedure(procedure)(arg);
    });
  })(function(procedure) {
    return X(function(arg) {
      return procedure(procedure)(arg);
    });
  });
}


