var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');
var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function() {
    client.subscribe('water');
})

client.on('message', function (topic, message){
    var h;
    if(h<95) {h++;}
    console.log('Current Humidity: ' + h.toString())}
)

