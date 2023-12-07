import { useState } from 'react';
import useWebSocket from 'react-use-websocket';
import ChatHistory from './ChatHistory';

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
    const [text, setText] = useState('');
    const [messageHistory, setMessageHistory] = useState([]);

    /**
     * @description update the messageHistory triggered by receiving a new message.
     * @param {WebSocketEventMap['message']} e an unparsed MessageEvent received from the WebSocket.
     */
    function handleReceivedMessage(e) {
        const messages = JSON.parse(e.data);

        // check the type of the received message.
        if (messages.type === "new") {
            // a new message is an object
            setMessageHistory((prev) => [...prev, messages]);
        }
        else if (messages.type === "history") {
            // history messages is an array, therefore use spread operator
            setMessageHistory((prev) => [...prev, ...messages.historyMessages]);
        }
    }

    /**
     * @description send user message to the websocket triggered by user hitting submit.
     */
    function handleSendMessage() {
        sendMessage(text);
        // clear the text input area.
        setText('');
    }

    function updateUserInput(e) {
        setText(e.target.value);
    }

    return (
        <>
            <ChatHistory messageHistory={messageHistory} />
            <div className="flex items-center justify-center h-1/5">
                <textarea
                    cols="30"
                    rows="10"
                    value={text}
                    placeholder="type your message..."
                    onChange={updateUserInput}
                    className="w-full h-full outline-none p-3 resize-none placeholder:italic focus:placeholder-transparent"
                >
                </textarea>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    onClick={handleSendMessage}
                    className="w-[10%] h-full p-[1.5%] fill-slate-600 hover:cursor-pointer hover:bg-slate-300 hover:fill-white border-l-2 border-solid"
                >
                    <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
                </svg>
            </div>
        </>
    )
}

