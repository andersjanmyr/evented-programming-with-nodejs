    var dnode = require('dnode');

    var server = dnode({
      zing : function (n, callback) {
        callback(n * 100);
      }
    });
    server.listen(5050);
