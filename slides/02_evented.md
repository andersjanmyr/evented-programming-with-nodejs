!SLIDE center

# Speed
![Speed](road-runner.jpg)

!SLIDE

# Threads vs Evented Programming

!SLIDE code
# Threaded code

	@@@ javascript
	var result = db.query("select * from T");
	// Use result

!SLIDE code small
# Evented Code

	@@@ javascript
	db.query("select * from T", function (result) {
		// Use result
	});

!SLIDE bullets

# Apache
## Threads

* Stack
* Context Switching

!SLIDE bullets

# Nginx
## Evented

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

!SLIDE

# Most libraries aren't

!SLIDE

# Alternatives
## EventMachine (Ruby)
## Twisted (Python)

