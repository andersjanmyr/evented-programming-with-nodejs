var client = require('beanstalk_client').Client;

client.connect('127.0.0.1:11300', function(err, conn) {
    var reserve = function() {
        conn.reserve(function(err, job_id, job_json) {
            console.log('got job: ' + job_id);
            console.log('got job data: ' + job_json);
            console.log('module name is ' + JSON.parse(job_json).data.name);
            conn.destroy(job_id, function(err) {
                console.log('destroyed job');
                reserve();
            });
        });
    }

    reserve();
});

