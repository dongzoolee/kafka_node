const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const Offset = kafka.Offset;
const Client = kafka.KafkaClient;
const topic = 'kafka_test';

let client = new Client({ kafkaHost: '49.247.23.18:9092' });
let topics = [{ topic: topic }];
let options = { autoCommit: false, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024 };

let consumer = new Consumer(client, topics, options);
let offset = new Offset(client);

consumer.on('message', (msg) => {
    console.log(msg);
})

consumer.on('error', (err) => {
    console.log(err);
})