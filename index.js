const mqtt = require('mqtt')
const fs = require('fs')

const client = mqtt.connect('mqtt://169.254.57.10:1883');
const writeStream = fs.createWriteStream('logs/log.txt');

client.on('connect', function () {
	console.log('Connected to 169.254.57.10:1883');
	client.subscribe('test_channel');
});

client.on('message', function (topic, message) {
	writeStream.write(message);
	console.log(message.toString());
	//   client.end()
});