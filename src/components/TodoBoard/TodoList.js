import { useState } from 'react';

/**
 * display the selected member's todo list
 * @typedef {Object} props
 * @property {Array} todoList
 * @property {number} selectedMember the selected member's id
 * @property {Function} onTodoChange replace the old todo item with the new one
 */
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

/**
 * display a todo item
 * @typedef {Object} props
 * @property {Object} todo a todo item
 * @property {Function} onTodoChange replace the old todo item with the new one
 *  
 * @typedef {Object} todo a todo item
 * @property {number} id the id of the todo item
 * @property {string} text the content of the todo item
 * @property {string} state the state of the todo item, either 'done' or 'undo'
 */
function TodoItem({ todo, onTodoChange}) {
    const { id, text, state} = todo;

    // a todo item is checked if its state is 'done'
    const isChecked = state === 'done' ? true : false;

    // react state - control whether the todo item is being editing
    const [isEditing, setIsEditing] = useState(false);

    // the button is a 'Save' button when a todo is being editing
    // otherwise it is a 'Edit' button 
    const EditOrSaveBtn = isEditing ? 'Save' : 'Edit';

    const onSave = () => setIsEditing(false);
    const onEdit = () => setIsEditing(true);
    const EditOrSaveHandler = isEditing ? onSave : onEdit;

    // the todo content is an text input when a todo being editing
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

        switch(e.target.type){
            case 'text':
                newTodo.text = e.target.value;
                break;
            case 'checkbox':
                newTodo.state = e.target.checked ? 'done' : 'undo';
                break;
        }
        
        // update the todo list with the new todo item
        onTodoChange(newTodo);      
    }

    
    function onDelete(e) {
        
    }
    
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