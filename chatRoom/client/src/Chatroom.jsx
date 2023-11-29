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

    /**
     * @description update the messageHistory triggered by receiving a new message.
     * @param {WebSocketEventMap['message']} e an unparsed MessageEvent received from the WebSocket.
     */
    function handleReceivedMessage(e) {
        const newMessage = JSON.parse(e.data);
        console.log(newMessage);
        setMessageHistory((prev) => [...prev, newMessage]);
    }

    /**
     * @description send user message to the websocket triggered by user hitting submit.
     */
    function handleSendMessage() {
        sendMessage(text);
        // clear the text input area.
        setText("");
    }

    /**
     * 
     * @param {number} timestamp milliseconds from Data.now()
     * @returns a formatted local time string 'mm/dd hh:mm'
     */
    function getLocalTimeFormatted(timestamp) {
        const date = new Date(timestamp);
        
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
    
        return `${month}/${day} ${hours}:${minutes}`;
    }

    function updateUserInput(e) {
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

