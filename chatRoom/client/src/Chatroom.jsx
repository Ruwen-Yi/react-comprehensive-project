import { useRef, useEffect, useState } from 'react';

export default function Chatroom() {
    const [text, setText] = useState(""); 
    const wsRef = useRef();
    
    // connect to websocket server on mount
    useEffect(() => {
        const client = new WebSocket('ws://localhost:8080');
        client.onerror = console.error;
        client.onopen = () => {
            console.log('Connected');
        };
        client.onmessage = (e) => {
            console.log('received: %s', e.data);
        };

        wsRef.current = client;

        return () => {
            wsRef.current.close();
            console.log("Connection clean up")
        }
    }, []);
    
    const sendMessage = (e) => {
        wsRef.current.send(text);
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
                <button onClick={sendMessage}>submit</button>
            </div>
        </>
    )
}