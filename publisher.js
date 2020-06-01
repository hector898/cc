var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');

const mintemp = 10;
const maxtemp = 24;
const humidmin = 95;
const minlumi = 10;
bool AirconOn = false;
bool LightOn = false;
bool WaterPOn = false;

function tempsen(topic){
    setInterval(
        client.on('connect', function(topic){
        client.publish('AirCon','Air Condition Ready'),1000)})
        var temp = 0;
        while(temp < 40){
        if (temp <= mintemp || temp >= maxtemp){
            AirconOn = true;
          console.log('Turning on the Air Condition');
        temp += 5;
        }
        elseif(temp >= maxtemp && temp <= mintemp){
            Aircon = false;
            Console.log('Air Condition Of');
        }
        else 
            console.log('No Need Air Condition');
        }
}
function lumisen(topic){	
    setInterval(
    client.on('connect', function(topic){
            client.publish('Light','Light Condition Ready')},1000))
            var lumidef = 0;
            while( lumidef < 10){
            if (minlumi = 10){
                LightOn = true;
              console.log('Turning on the Light');
              lumidef += 2;
            elseif ( lumidef >= 10){
                LightOn = false;
            }
            else 
                console.log('No need Light);
}

}
function humidsen(Topic){
        client.on('connect', function(){
                function(){client.publish('Water','Water Pump Ready'),1000)
             humiddef = 0;
            if (humidmin <= 95 ){
                WaterPOn = true;
              console.log('Turning on the Water Pump');
              humiddef += 10
            }
            elseif(humiddef >= 95){}
            else 
               console.log('No Need Water Pump');
    WaterPon = false;
    }
}

tempsen('AirCon');
humidsen(WaterPump);
lumisen(Light);
