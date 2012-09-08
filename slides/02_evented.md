!SLIDE center

# Speed
![Speed](road-runner.jpg)

!SLIDE

# Threads vs Evented Programming

!SLIDE code
# Threaded code

    @@@ javascript
    var result = db.query("select * from T");
    // Waiting...
    // Use result

!SLIDE code small
# Evented Code

    @@@ javascript
    db.query("select * from T", function (result) {
      // Use result
    });

    // Execution continues

!SLIDE bullets

# Threads
## Apache

* Stack
* Context Switching

!SLIDE bullets

# Evented
## Nginx

* No Stack
* Explicit Task Switching

!SLIDE center

![nginx apache reqs](nginx-apache-reqs-sec.png)

# concurrency × requests/s

Source: [A little holiday present: 10,000 reqs/sec with Nginx!](http://blog.webfaction.com/a-little-holiday-present)

!SLIDE center

![nginx apache memory](nginx-apache-memory.png)

# concurrency × memory

Source: [A little holiday present: 10,000 reqs/sec with Nginx!](http://blog.webfaction.com/a-little-holiday-present)

!SLIDE

# Single-threaded event loop
# requires non-blocking IO


!SLIDE bullets

# Alternatives

* `select()` (C, 1983)
* Twisted (Python, 2002)
* EventMachine (Ruby, 2003)
* Goliath (Ruby, 2011)
* Async Framework (.Net, 2011)

!SLIDE code
# The Event Loop

    @@@javascript
    while(somethingIsGoingOn()) {
        readyChannels = select(ioChannels);
        for (channel in readyChannels) 
            performIO(channel);
    }

!SLIDE code
# The Node Event Loop

    @@@javascript
    // The Node Event Loop is implicit.
    // All code YOU write is
    // automatically inside the loop.
    // WHILE SOMETHING IS GOING ON



