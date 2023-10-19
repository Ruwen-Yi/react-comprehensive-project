import { useState } from 'react';

export default function TodoList({ todoList, selectedMember }) {

    return (
        <div className="list-group">
            {todoList.map((todo) => (
                <TodoItem
                    key={`${selectedMember}-${todo.id}`}
                    {...todo}
                />
            ))}
        </div>
    )
}

function TodoItem({ id, text, state}) {
    const [isEditing, setIsEditing] = useState(false);

    const EditOrSaveBtn = isEditing ? 'Save' : 'Edit';
    
    function onEdit(e) {
        setIsEditing(!isEditing);
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
                />
                <label 
                    className="list-group-item"
                    htmlFor={id}
                >
                    {text}
                </label>
            </div>
            <div className='custom-buttons-wrapper'>
                <button 
                    className="btn btn-dark rounded-pill me-1"
                    onClick={onEdit}    
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