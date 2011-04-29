!SLIDE commandline

# Get Started

    $ brew install node
    ==> Downloading http://nodejs.org/dist/node-v0.4.7.tar.gz
    ######################################################################## 100.0%
    ==> ./configure --prefix=/usr/local/Cellar/node/0.4.7
    ==> make install
    ==> Caveats
    Please add /usr/local/lib/node to your NODE_PATH environment variable to have node libraries picked up.
    ==> Summary
    /usr/local/Cellar/node/0.4.7: 72 files, 7.5M, built in 1.2 minutes

!SLIDE commandline
# Start

    $ node # without arguments opens a REPL
    > function hello(name) {
    ... return 'hello ' + name;
    ... }
    > hello('tapir')
    'hello tapir'
    > 


!SLIDE
# Hello World!

    @@@javascript
    // hello.js
    setTimeout(function() {
        console.log('Tapir');
    }, 2000);
    console.log('Hello');

!SLIDE commandline
# Start Script

    $ node hello.js
    Hello
    ...
    Tapir



