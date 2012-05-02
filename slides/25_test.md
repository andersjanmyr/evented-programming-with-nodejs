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

* mocha
* nodeunit
* vows
* jasmine
* qunit
* +50 others

!SLIDE smaller
# Mocha

    @@@javascript
    var should = require('should');
    var sleepsort = require('../lib/main');

    describe('sleepsort', function() {

      describe('with no arguments', function() {
        it('returns an empty array', function() {
          var result = sleepsort();
          result.should.eql([]);
        });
      });

    });


!SLIDE commandline
# Mocha (running)

    $ mocha -R spec test/*

      sleepsort
        with an empty array argument
          ✓ calls the callback with an empty array
        with a single element array
          ✓ calls the callback with a single element array
        with an unsorted two element array
          ✓ calls the callback with a sorted array

      ✔ 3 tests complete (9ms)

!SLIDE smaller
# mocha (async)

    @@@javascript
    describe('sleepsort', function() {
      describe('with an unsorted two element array', function() {

        it('is called with a sorted array', function(done) {
          var result = sleepsort([2, 1], function(result) {
            result.should.eql([1, 2]);
            done();
          });
        });

      });
    });

!SLIDE smaller
# sleepsort

    @@@javascript
    function sleepsort(array, callback) {
      var result = [];

      function appendResult(n) {
          return function() {
              result.push(n);
              if (array.length === result.length)
                  callback(result);
          };
      }

      for (var i = 0; i < array.length; i++)
          setTimeout(appendResult(array[i]), array[i]);
    }


