var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function () {
client.subscribe('now);
})
client.on('message', function (topic,
message) {setInterval(function(){
    var humidity = message;
    client.publish('water', humidity.toString)
})
})
