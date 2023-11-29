import { WebSocketServer } from 'ws';
import { v4 as uuidv4 } from 'uuid';

const clients = new Map();
const server = new WebSocketServer({ port: 8080 }, () => console.log('server started'));

class Message {
    constructor(content, timestamp, clientId) {
        this.content = content;
        this.timestamp = timestamp;
        this.clientId = clientId;
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