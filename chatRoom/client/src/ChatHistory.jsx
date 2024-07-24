import { useRef, useEffect } from 'react';

export default function ChatHistory({ messageHistory }) {
    const historyContainerRef = useRef(null);
    
    useEffect(() => {
        const historyContainer = historyContainerRef.current;
        historyContainer.scrollTop = historyContainer.scrollHeight;
    }, [messageHistory]);

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

    /**
     *
     * @param {*} message a history message object
     * @returns a message element with proper layout,
     *          if the message sent by the current client, message set on the right side
     */
    function layoutMessage(message) {
        const { content, timestamp, clientId, messageId, isCurrentClient } =
            message;
        let localTime = getLocalTimeFormatted(timestamp);

        if (isCurrentClient) {
            return (
                <li
                    key={messageId}
                    className="flex w-full justify-end"
                >
                    {/* set up avartar */}
                    <div className="avatar order-2 h-[3rem] w-[3rem]">
                        <div className="rounded-full">
                            <img src="https://images.unsplash.com/photo-1634080389392-914b8ec3844b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                    </div>
                    {/* set up message */}
                    <div className="mb-5 mr-4 mt-4 inline-flex max-w-[66%] flex-col items-end">
                        <div className="relative w-fit max-w-full break-words rounded bg-slate-300 p-[0.5rem]">
                            {/* set up the message arrow */}
                            <div className="absolute right-[-0.4rem] top-[0.5rem] z-[1] h-0 w-0 border-[0.5rem] border-r-0 border-transparent border-l-slate-300"></div>
                            {/* set up message content*/}
                            <span key={messageId}>{content}</span>
                        </div>
                        <div className="text-right text-xs text-slate-300">
                            <span>{localTime}</span>
                        </div>
                    </div>
                </li>
            );
        } else {
            return (
                <li
                    key={messageId}
                    className="flex w-full justify-start"
                >
                    {/* set up avartar */}
                    <div className="avatar h-[3rem] w-[3rem]">
                        <div className="rounded-full">
                            <img src="https://images.unsplash.com/photo-1634080389392-914b8ec3844b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                    </div>
                    {/* set up message */}
                    <div className="mb-5 ml-4 mt-4 inline-flex max-w-[66%] flex-col items-start">
                        <div className="relative w-fit max-w-full break-words rounded bg-slate-400 p-[0.5rem]">
                            {/* set up the message arrow */}
                            <div className="absolute left-[-0.4rem] top-[0.5rem] z-[1] h-0 w-0 border-[0.5rem] border-l-0 border-transparent border-r-slate-400"></div>
                            {/* set up message content*/}
                            <span key={messageId}>{content}</span>
                        </div>
                        <div className="text-right text-xs text-slate-300">
                            <span>{localTime}</span>
                        </div>
                    </div>
                </li>
            );
        }
    }

    return (
        <div className="h-4/5 w-full overflow-y-auto bg-slate-600 p-3" ref={historyContainerRef}>
            <ul>{messageHistory.map((message) => layoutMessage(message))}</ul>
        </div>
    );
}
