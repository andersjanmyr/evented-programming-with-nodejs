var doubled = {
  calculate: function(n) {
    return n * 2;
  },
  read: function () {
    var stdin = process.openStdin();

      stdin.on('data', function (chunk) {
        var num = parseFloat(chunk);
        var result = doubled.calculate(num);
        console.log('Doubled: ' + result);
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
    test.expect(1); // Make sure the assertion is run

    var ev = new events.EventEmitter();
    process.openStdin = function () { return ev; };
    process.exit = test.done;

    console.log = function (str) {
        test.equal(str, 'Doubled: 24');
    };
    
    doubled.read();
    ev.emit('data', '12');
};

