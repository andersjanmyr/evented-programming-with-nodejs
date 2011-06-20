!SLIDE
# Testing with Node

!SLIDE small
# Assert
## Built into the framework
    @@@javascript
    assert.ok(value, [message]);
    assert.equal(actual, expected, [message])
    assert.notEqual(actual, expected, [message])
    assert.deepEqual(actual, expected, [message])
    assert.strictEqual(actual, expected, [message])
    assert.throws(block, [error], [message])
    assert.doesNotThrow(block, [error], [message])
    assert.ifError(value)
    assert.fail(actual, expected, message, operator)


!SLIDE small
# Assert Example

    @@@javascript
    // assert.throws(function, regexp)
    assert.throws(
      function() { throw new Error("Wrong value"); },
      /value/
    );
    



!SLIDE bullets
# Test Frameworks

* nodeunit
* expresso
* should.js
* testosterone
* spec
* qunit
* +40 others

!SLIDE 
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

!SLIDE small
# NodeUnit (async)

    @@@javascript
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




