var client = require('beanstalk_client').Client;

client.connect('127.0.0.1:11300', function(err, conn) {
    var job_data = {"data": {"name": "node-beanstalk-client"}};
    var priority = 0;
    var delay = 5;
    var timeToRun = 1;
    conn.put(priority, delay, timeToRun, JSON.stringify(job_data), function(err, job_id) {
        console.log('put job: ' + job_id);
        process.exit();
    });
});

