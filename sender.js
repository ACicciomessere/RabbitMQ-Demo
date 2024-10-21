const amqp = require("amqplib");
const queue = "test";

async function sendMessage(msg, queue) {
  try {
    const connection = await amqp.connect("amqp://localhost:5672/");
    const channel = await connection.createChannel();

    await channel.assertQueue(queue);
    await channel.sendToQueue(queue, Buffer.from(msg));
    console.log(`Message sent: ${msg}`);


    await channel.close();
    await connection.close();

  } catch (err) {
    console.log(err);
  }
}

sendMessage("queue1", "q1");
sendMessage("queue2", "q2");
sendMessage("queue1 segundo mensaje", "q1");
sendMessage("queue2 segundo mensaje", "q2");
sendMessage(
  JSON.stringify({
    name: "Nico",
    age: "22",
    country: "Argentina",
    city: "Buenos Aires",
    neighborhood: "Caballito", 
  }),
  "q2");


