export default function ChatHistory({ messageHistory }) {
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

    function layoutMessage({ content, timestamp, clientId, messageId, isCurrentClient }) {
        if (isCurrentClient) {
            return (
                <li 
                    key={messageId} 
                    className={"flex w-full justify-end"}
                >
                    {/* set up avartar */}
                    <div className={"avatar h-[3rem] w-[3rem] order-2"}>
                        <div className="rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    {/* set up message */}
                    <div className="mb-5 mr-4 mt-4 inline-flex flex-col items-end max-w-[66%]">
                        <div className="relative w-fit max-w-full break-words rounded bg-slate-300 p-[0.5rem]">
                            {/* set up the message arrow */}
                            <div className="absolute right-[-0.4rem] top-[0.5rem] z-[1] h-0 w-0 border-[0.5rem] border-r-0 border-transparent border-l-slate-300"></div>
                            {/* set up message content*/}
                            <span key={messageId}>
                                {content}
                            </span>
                        </div>
                        <div className="text-xs text-slate-300 text-right">
                            <span>{getLocalTimeFormatted(timestamp)}</span>
                        </div>
                    </div>
                </li>
            )
        }
        else {
            return (
                <li 
                    key={messageId} 
                    className={"flex w-full justify-start"}
                >
                    {/* set up avartar */}
                    <div className={"avatar h-[3rem] w-[3rem]"}>
                        <div className="rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    {/* set up message */}
                    <div className="mb-5 ml-4 mt-4 inline-flex flex-col max-w-[66%]">
                        <div className="relative w-fit max-w-full break-words rounded bg-slate-400 p-[0.5rem]">
                            {/* set up the message arrow */}
                            <div className="absolute left-[-0.4rem] top-[0.5rem] z-[1] h-0 w-0 border-[0.5rem] border-l-0 border-transparent border-r-slate-400"></div>
                            {/* set up message content*/}
                            <span key={messageId}>
                                {content}
                            </span>
                        </div>
                        <div className="text-xs text-slate-300 text-right">
                            <span>{getLocalTimeFormatted(timestamp)}</span>
                        </div>
                    </div>
                </li>
            )
        }
    }

    return (
        <div className="h-4/5 w-full overflow-y-auto bg-slate-600 p-3">
            <ul>
                {messageHistory.map(message => layoutMessage(message))}
            </ul>
        </div>
    );
}
