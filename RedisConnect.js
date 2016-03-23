/**
 * Created by Bente on 17-03-2016.
 */

var redis = require('redis');
var client = redis.createClient(12834, 'pub-redis-12834.eu-central-1-1.1.ec2.redislabs.com', {no_ready_check: true});
client.auth('cph-ba98', function (err) {
    if (err){
        console.log(err);
    }
});
client.set("key1", "This is cool", redis.print);
client.get("key1", function (err, reply) {
    if (err) throw err;
    console.log(reply.toString());
});