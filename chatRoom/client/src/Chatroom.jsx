import { useState } from 'react';
import useWebSocket from 'react-use-websocket';

export default function Chatroom() {
    const { sendMessage, lastMessage, readyState } = useWebSocket('ws://localhost:8080', {
        onOpen: () => console.log('opened'),
        onMessage: handleReceivedMessage,
        onError: console.error,
        share: true,
        filter: () => false,
        retryOnError: true,
        shouldReconnect: () => true
    });
    const [text, setText] = useState(""); 
    const [messageHistory, setMessageHistory] = useState([]);

    function handleReceivedMessage(e) {
        const newMessage = JSON.parse(e.data);
        console.log(newMessage);
        setMessageHistory((prev) => [...prev, newMessage]);
    }

    const handleSendMessage = (e) => {
        sendMessage(text);
        setText("");
    }

    const updateUserInput = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <div>
                view
                <ul>
                    {messageHistory.map(({content, timestamp, clientId, messageId}) => (
                        <span key={messageId}>
                            {content} | at {getLocalTimeFormatted(timestamp)} from {clientId}
                            <br/>
                        </span>
                    ))}
                </ul>
            </div>
            <div>
                <input 
                    type="text" 
                    id="user-input"
                    value={text}
                    onChange={updateUserInput}
                />
                <button onClick={handleSendMessage}>submit</button>
            </div>
        </>
    )
}

function getLocalTimeFormatted(timestamp) {
    const date = new Date(timestamp);
    
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${month}/${day} ${hours}:${minutes}`;
}