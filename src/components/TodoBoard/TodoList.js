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

    // react state - control whether the todo item is being editing
    const [isEditing, setIsEditing] = useState(false);

    const EditOrSaveBtn = isEditing ? 'Save' : 'Edit';
    const EditOrSaveHandler = isEditing ? onSave : onEdit;

    // the todo content is an text input when being editing
    // otherwise it is an uneditable label
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
        
    /**
     * this event listener fires when the text or state of a todo item changed
     * @param {Event} e 
     */
    function onChange(e) {
        let newTodo = {...todo};

        if (e.target.type === 'text') {
            newTodo.text = e.target.value;
        }
        else if (e.target.type === 'checkbox') {
            newTodo.state = e.target.checked ? 'done' : 'undo';
        }
        
        onTodoChange(newTodo);      // update the todo list with the new todo item
    }

    const onSave = () => setIsEditing(false);
    const onEdit = () => setIsEditing(true);
    
    function onDelete(e) {
        
    }

    // a todo item is checked if its state is 'done'
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