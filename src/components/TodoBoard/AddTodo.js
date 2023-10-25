import { useRef, useState } from "react";

export default function AddTodo({ onTodoAdd }) {
    const [todoText, setTodoText] = useState('');
    const inputRef = useRef(null);


    function onChange(e) {
        setTodoText(e.target.value);
    }

    function onClick() {
        todoText.trim() ? onTodoAdd(todoText) : inputRef.current.focus();
        setTodoText('');
    }

    return (
        <label htmlFor="todo-input" className="custom-add-new-todo">
            <input
                type="text"
                id="todo-input"
                placeholder="please enter"
                value={todoText}
                onChange={onChange}
                ref={inputRef}
            />
            <button
                className="btn btn-dark rounded-pill"
                onClick={onClick} 
            >
                Add Todo
            </button>
        </label>
    )
}