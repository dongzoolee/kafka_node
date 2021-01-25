const kafka = require('kafka-node');
const Producer = kafka.Producer;
const KeyedMessage = kafka.KeyedMessage;
const client = new kafka.KafkaClient();
const producer = new Producer(client);
let km = new KeyedMessage('key', 'msg');
const payloads = [
    {
        topic: 'kafka_test',
        messages: JSON.stringify({
            id: 'nant0313',
            pw: 'soganghigh'
        }),
        key: "",
        timestamp: Date.now()
    }
]
producer.on('ready', () => {
    producer.send(payloads, (err, data) => {
        console.log(data);
    })
})