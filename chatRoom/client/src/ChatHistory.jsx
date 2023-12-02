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

    return (
        <div className="h-4/5 w-full bg-slate-600 p-3 overflow-y-auto">
            <ul>
                {messageHistory.map(({content, timestamp, clientId, messageId}) => (
                    <li className="flex justify-start w-full">
                        {/* set up avartar */}
                        <div class="avatar w-[3rem] h-[3rem]">
                            <div class="rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        {/* set up message */}
                        <div className="inline-block mb-5 ml-4 mt-4 max-w-[66%]">
                            <div className="rounded bg-slate-400 p-[0.5rem] w-fit max-w-full break-words relative">
                                {/* set up an left arrow*/}
                                <div className="w-0 h-0 absolute top-[0.5rem] left-[-0.4rem] border-transparent border-[0.5rem] border-l-0 border-r-slate-400 z-[1]"></div>
                                {/* set up message content*/}
                                <span key={messageId}>
                                    {content}
                                </span>
                            </div>
                            <div className="text-slate-300 text-xs">
                                <span>
                                    {getLocalTimeFormatted(timestamp)} 
                                </span>
                            </div>
                            from {clientId}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}