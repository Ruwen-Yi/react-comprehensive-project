import { useRef, useEffect } from 'react';

export default function Chatroom() {
    const wsRef = useRef();
    
    // connect to websocket server on mount
    useEffect(() => {
        const client = new WebSocket('ws://localhost:8080');
        client.onerror = () => console.error;
        client.onopen = () => {
            console.log('Connected');
        };
        client.onmessage = (data) => {
            console.log('received: %s', data);
        };

        wsRef.current = client;

        return () => wsRef.current.close()
    }, []);
    
    const sendMessage = (e) => {
        const message = document.getElementById('user-input');
        wsRef.current.send(message.value);
    }

    return (
        <>
            <div>
                view
            </div>
            <div>
                <input type="text" id="user-input"/>
                <button onClick={sendMessage}>submit</button>
            </div>
        </>
    )
}