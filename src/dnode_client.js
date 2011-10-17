    var dnode = require('dnode');

    dnode.connect(5050, function (remote) {
        remote.zing(66, function (n) {
            console.log('n = ' + n);
        });
    });

