!SLIDE commandline

# Get Started

    $ brew install node

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



