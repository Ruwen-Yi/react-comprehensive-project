
export default function TodoList({ todoList }) {
    
    return (
        <div className="list-group">
            {todoList.map((todo) => {
                const { id, text, state } = todo;
                const isChecked = state === 'done' ? true : false;
                
                return (
                    <div 
                        className='custom-list-group-item-container' 
                        key={id}
                    >
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
                            <button className="btn btn-dark rounded-pill me-1">Edit</button>
                            <button className="btn btn-dark rounded-pill">Cancel</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}