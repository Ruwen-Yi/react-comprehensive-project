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
        <div className="h-4/5 w-full overflow-y-auto bg-slate-600 p-3">
            <ul>
                {messageHistory.map(({ content, timestamp, clientId, messageId, isCurrentClient }) => (
                    <li className="flex w-full justify-start">
                        {/* set up avartar */}
                        <div class="avatar h-[3rem] w-[3rem]">
                            <div class="rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        {/* set up message */}
                        <div className="mb-5 ml-4 mt-4 inline-block max-w-[66%]">
                            <div className="relative w-fit max-w-full break-words rounded bg-slate-400 p-[0.5rem]">
                                {/* set up an left arrow*/}
                                <div className="absolute left-[-0.4rem] top-[0.5rem] z-[1] h-0 w-0 border-[0.5rem] border-l-0 border-transparent border-r-slate-400"></div>
                                {/* set up message content*/}
                                <span key={messageId}>{content}{isCurrentClient ? "(my message)" : null}</span>
                            </div>
                            <div className="text-xs text-slate-300">
                                <span>{getLocalTimeFormatted(timestamp)}</span>
                            </div>
                            from {clientId}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
