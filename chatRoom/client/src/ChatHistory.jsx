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
                    <>
                        <div className="avatar">
                            <div className="w-[9%] max-w-2xl rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="rounded bg-slate-400 p-3 w-fit max-w-[66%] mb-5 break-words">
                            <span key={messageId}>
                                {content} | at {getLocalTimeFormatted(timestamp)} from {clientId}
                            </span>
                        </div>
                    </>
                ))}
            </ul>
        </div>
    )
}