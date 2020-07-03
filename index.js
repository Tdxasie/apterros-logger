const mqtt = require('mqtt')
const fs = require('fs')

const client = mqtt.connect('mqtt://192.168.1.21:1883');
const writeStream = fs.createWriteStream('logs/log.txt');

client.on('connect', function () {
	console.log('Connected to mqtt://192.168.1.21:1883');
	client.subscribe('test_channel');
});

client.on('message', function (topic, message) {
	writeStream.write(message);
	console.log(message.toString());
	//   client.end()
});