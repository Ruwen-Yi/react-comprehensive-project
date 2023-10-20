import { useState } from 'react';

export default function TodoList({ todoList, selectedMember, onTodoChange }) {

    return (
        <div className="list-group">
            {todoList.map((todo) => (
                <TodoItem
                    key={`${selectedMember}-${todo.id}`}
                    todo={todo}
                    onTodoChange={onTodoChange}
                />
            ))}
        </div>
    )
}

function TodoItem({ todo, onTodoChange}) {
    const { id, text, state} = todo;

    const [isEditing, setIsEditing] = useState(false);

    const EditOrSaveBtn = isEditing ? 'Save' : 'Edit';
    const EditOrSaveHandler = isEditing ? onSave : onEdit;
    const todoContent = isEditing ? 
        (<input 
            className="list-group-item"
            value={text}
            onChange={onChange}
        />) : 
        (<label 
            className="list-group-item"
            htmlFor={id}
        >
            {text}
        </label>)
        
    function onChange(e) {
        let newTodo = {...todo};

        if (e.target.type === 'text') {
            newTodo.text = e.target.value;
        }
        else if (e.target.type === 'checkbox') {
            newTodo.state = e.target.checked ? 'done' : 'undo';
        }
        
        onTodoChange(newTodo);
    }

    function onSave(e) {
        setIsEditing(false);
    }

    function onEdit(e) {
        setIsEditing(true);
    }
    
    function onDelete(e) {
        
    }

    const isChecked = state === 'done' ? true : false;
    
    return (
        <div className='custom-list-group-item-container'>
            <div className="custom-input-label-wrapper">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    defaultChecked={isChecked}
                    id={id}
                    onChange={onChange}
                />
                {todoContent}
                {/* 
                <label 
                    className="list-group-item"
                    htmlFor={id}
                >
                    {text}
                </label> */}
            </div>
            <div className='custom-buttons-wrapper'>
                <button 
                    className="btn btn-dark rounded-pill me-1"
                    onClick={EditOrSaveHandler}    
                >
                    {EditOrSaveBtn}
                </button>
                <button 
                    className="btn btn-dark rounded-pill"
                    onClick={onDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}