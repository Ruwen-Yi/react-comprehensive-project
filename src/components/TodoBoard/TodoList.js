export default function TodoList({ todoList }) {
    return (
        <div className="list-group">
            {todoList.map((todo) => {
                const { text, state } = todo;
                const isChecked = state === 'done' ? true : false;
                
                return (
                    <div className='custom-list-group-item-container'>
                        <div className="custom-input-label-wrapper">
                            <input 
                                className="form-check-input me-1" 
                                type="checkbox" 
                                checked={isChecked} 
                            />
                            <label className="list-group-item">{text}</label>
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
{/* <CListGroup>
                {todoList.map((todo) => (
                    <StyledCListGroupItem key={todo.id}>
                        <TodoItem {...todo} />
                    </StyledCListGroupItem>
                ))}
            </CListGroup> */}