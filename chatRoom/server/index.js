import { WebSocketServer } from 'ws';
import { v4 as uuidv4 } from 'uuid';
import { databaseClient } from './database.js';

const server = new WebSocketServer({ port: 8080 }, () => console.log('server started'));

const clients = new Map();

class Message {
    static nextMessageId = 0;
    constructor(content, timestamp, clientId) {
        this.content = content;
        this.timestamp = timestamp;
        this.clientId = clientId;
        this.messageId = Message.nextMessageId++;
    }
}

server.on('connection', function connection(ws) {
    // generate a unique code for every client
    const clientId = uuidv4();

    // store the new connection
    clients.set(clientId, ws);

    ws.on('error', console.error);

    ws.on('message', (message) => handleMessage(message, clientId));

    ws.on('close', () => handleDisconnect(clientId));
});

function handleMessage(message, clientId) {
    console.log('received: %s (from %s)', message, clientId);

    const newMessage = new Message(message.toString(), Date.now(), clientId)
    broadcastMessage(JSON.stringify(newMessage));
}

function handleDisconnect(clientId) {
    console.log('user %s disconnected', clientId);
}

function broadcastMessage(message) {
    clients.forEach((ws) => {
        ws.send(message);
    })
}

// test the database connection
async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await databaseClient.connect();
      // Send a ping to confirm a successful connection
      await databaseClient.db("testdb").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await databaseClient.close();
    }
}
run().catch(console.dir);