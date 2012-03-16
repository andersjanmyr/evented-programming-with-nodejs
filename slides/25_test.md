!SLIDE
# Testing with Node

!SLIDE smaller
# Assert
## Built into the framework
    @@@javascript
    assert.ok(value, [message]);
    assert.equal(actual, expected, [message])
    assert.notEqual(actual, expected, [message])
    assert.deepEqual(actual, expected, [message])
    assert.strictEqual(actual, expected, [message])
    assert.ifError(value)
    assert.fail(actual, expected, message, operator)
    assert.doesNotThrow(block, [error], [message])
    assert.throws(block, [error], [message])


!SLIDE bullets small
# Test Frameworks

* nodeunit
* jasmine
* vows
* qunit
* +50 others

!SLIDE smaller
# NodeUnit

    @@@javascript
    // ./test/test-doubled.js
    var doubled = require('../lib/doubled');

    exports['calculate'] = function (test) {
        test.equal(doubled.calculate(2), 4);
        test.done();
    };
    

!SLIDE commandline
# NodeUnit (running)

    $ nodeunit test

    test-doubled
    ✔ calculate

    OK: 1 assertions (3ms)

!SLIDE smaller
# NodeUnit (async)

    @@@javascript
    exports['read a number'] = function (test) {
        test.expect(1); // Make sure the assertion is run

        // Mock stdin and exit
        var ev = new events.EventEmitter();
        process.openStdin = function () { return ev; };
        process.exit = test.done;
        
        // Setup the expectation
        console.log = function (str) {
            test.equal(str, 'Doubled: 24');
        };
       
        // Perform the action
        doubled.read();
        // Simulate 12 entered on stdin
        ev.emit('data', '12');
    };




