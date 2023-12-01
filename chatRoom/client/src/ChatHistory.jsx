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
        <ul>
            {messageHistory.map(({content, timestamp, clientId, messageId}) => (
                <div>
                    <span key={messageId}>
                        {content} | at {getLocalTimeFormatted(timestamp)} from {clientId}
                    </span>
                </div>
            ))}
        </ul>
    )
}