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
                    {messageHistory.map((message, idx) => (
                        <>
                        <span key={idx}>{message.content} | at {message.timestamp}</span>
                        <br/>
                        </>
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