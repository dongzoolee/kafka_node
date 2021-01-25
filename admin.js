const kafka = require('kafka-node');
const Client = kafka.KafkaClient;
let client = new Client({ kafkaHost: '49.247.23.18:9092' });

const admin = new kafka.Admin(client);
admin.listTopics((err, res) => {
  console.log('topics', res);
});