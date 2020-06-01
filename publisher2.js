var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function () {
setInterval(function(){client.publish('now', 'Hello mqtt')},1000)
})