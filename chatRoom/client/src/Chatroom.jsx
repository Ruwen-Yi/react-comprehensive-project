import { useState } from 'react';
import useWebSocket from 'react-use-websocket';

export default function Chatroom() {
    const { sendMessage, lastMessage, readyState } = useWebSocket('ws://localhost:8080', {
        onOpen: () => console.log('opened'),
        onMessage: (e) => console.log('received: %s', e.data),
        onError: console.error,
        share: true,
        filter: () => false,
        retryOnError: true,
        shouldReconnect: () => true
    });
    const [text, setText] = useState(""); 
    
    const sendMessages = (e) => {
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
            </div>
            <div>
                <input 
                    type="text" 
                    id="user-input"
                    value={text}
                    onChange={updateUserInput}
                />
                <button onClick={sendMessages}>submit</button>
            </div>
        </>
    )
}