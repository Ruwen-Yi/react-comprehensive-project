import { WebSocketServer } from 'ws';
import { v4 as uuidv4 } from 'uuid';
import './loadEnvironment.js'
import database from './db/connection.js';

const server = new WebSocketServer({ port: 8080 }, () => console.log('server started'));

const clients = new Map();

class Message {
    constructor(content, timestamp, clientId) {
        this.content = content;
        this.timestamp = timestamp;
        this.clientId = clientId;
        this.messageId = uuidv4();
        this.isCurrentClient = false;
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

function handleDisconnect(clientId) {
    console.log('user %s disconnected', clientId);
}

function handleMessage(message, clientId) {
    console.log('received: %s (from %s)', message, clientId);

    const newMessage = new Message(message.toString(), Date.now(), clientId);

    storeNewMessage(newMessage)
        .then((result) => {
            result.acknowledged ? broadcastMessage(newMessage) : null;
        })
        .catch(console.dir);
}

function broadcastMessage(newMessage) {
    clients.forEach((ws, clientId) => {
        if (clientId === newMessage.clientId) {
            ws.send(JSON.stringify({ ...newMessage, isCurrentClient: true }));
        }
        else {
            ws.send(JSON.stringify(newMessage));
        }
    })
}

async function storeNewMessage(newMessage) {
    try {
        const result = await database.collection("testcollection").insertOne(newMessage);
        console.log(result);
        
        return result;
    } catch (error) {
        console.error(error)
    }
}
