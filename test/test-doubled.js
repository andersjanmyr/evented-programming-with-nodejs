var doubled = {
  calculate: function(n) {
    return n * 2;
  },
  read: function () {
    var stdin = process.openStdin();

      stdin.on('data', function (chunk) {
          process.exit();
      });
  }
};

exports['calculate'] = function (test) {
    test.equal(doubled.calculate(2), 4);
    test.done();
};

var events = require('events');
exports['read a number'] = function (test) {
    var ev = new events.EventEmitter();

    process.openStdin = function () { return ev; };
    process.exit = test.done;

    doubled.read();
    ev.emit('data', '12');
};

