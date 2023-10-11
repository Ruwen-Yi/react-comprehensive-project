export default function TodoList() {
    return(
        <div>
            <ul>
                <li>
                    <label htmlFor="task-0">purchases a wand</label>
                    <input type="checkbox" id="task-0"/>
                </li>
                <li>
                    <label htmlFor="task-1">buys school textbooks</label>
                    <input type="checkbox" id="task-1"/>
                </li>
                <li>
                    <label htmlFor="task-2">buys a cauldron</label>
                    <input type="checkbox" id="task-2"/>
                </li>
            </ul>
        </div>
    )
}