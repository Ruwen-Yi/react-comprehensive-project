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
    const isChecked = state === 'done' ? true : false;
        
    function onEdit(e) {
        
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
                    Edit
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