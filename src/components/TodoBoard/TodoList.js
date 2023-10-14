export default function TodoList() {
    return (
        <ul>
            <li>
                <input type="checkbox" id="task-0" />
                <label htmlFor="task-0">purchases a wand</label>
                <button>Edit</button>
                <button>Cancel</button>
            </li>
            <li>
                <input type="checkbox" id="task-1" />
                <label htmlFor="task-1">buys school textbooks</label>
                <button>Edit</button>
                <button>Cancel</button>
            </li>
            <li>
                <input type="checkbox" id="task-2" />
                <label htmlFor="task-2">buys a cauldron</label>
                <button>Edit</button>
                <button>Cancel</button>
            </li>
        </ul>
    )
}