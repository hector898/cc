var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', function () {
    setInterval(function(){
        const h =20;
        const l =10;
        const t = 25;
        client.publish('now', h.toString())},1000)
})