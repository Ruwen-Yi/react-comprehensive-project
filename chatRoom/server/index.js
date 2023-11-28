import { WebSocketServer } from 'ws';
import { v4 as uuidv4 } from 'uuid';

const clients = new Map();
const server = new WebSocketServer({ port: 8080 }, () => console.log('server started'));

server.on('connection', function connection(ws) {
    // generate a unique code for every client
    const clientId = uuidv4();

    // store the new connection
    clients.set(clientId, ws);

    ws.on('error', console.error);

    ws.on('message', (message) => handleMessage(message, clientId));

    ws.on('close', () => handleDisconnect(clientId));

    ws.send('This is server, nice to meet you!');
});

function handleMessage(message, clientId) {
    console.log('received: %s (from %s)', message, clientId);
    broadcastMessage(message);
}

function handleDisconnect(clientId) {
    console.log('user %s disconnected', clientId);
}

function broadcastMessage(message) {
    clients.forEach((ws) => {
        ws.send(message.toString());
    })
}