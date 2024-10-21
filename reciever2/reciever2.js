const amqp = require('amqplib');
const queue = 'q2';

async function recieveMessage(){
    try{
        const connection = await amqp.connect('amqp://localhost:5672/');
        const channel = await connection.createChannel();
        await channel.assertQueue(queue)

        channel.consume(queue, msg => {
            console.log(`Message recieved: ${queue + " " + msg.content.toString()}`);
            channel.ack(msg);
            console.log(`Waiting for messages in ${queue}....`);
        });
    } catch(err){
        console.log(err);
    }
}

recieveMessage();