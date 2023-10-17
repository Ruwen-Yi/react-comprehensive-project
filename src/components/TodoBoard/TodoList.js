import { CListGroup, CListGroupItem, CFormCheck, CButton } from '@coreui/react'
import styled from "styled-components"

const StyledCListGroupItem = styled(CListGroupItem)`
    width:35vw;
    border: 0;
    background-color: transparent;
    font-size: 1.5rem;

    display: flex;
    justify-content: space-between; 

    &:hover {
        border: 3px solid #212631;
        border-radius: 0;
    }
    input[type='checkbox'] {
        border: 3px solid #212631;
        background-color: transparent;
    }
    input[type='checkbox']:checked {
        border-color: #a4a9ac;
        background-color: #a4a9ac;
    }
    input[type='checkbox']:checked + label {
        font-style: italic;
        color: #a4a9ac;
        text-decoration: line-through;
    }
`

// use coreUI's built-in classes to layout containers
// of the input/label group and the button group.
let labelContainerClasses = "d-inline-block text-wrap text-break";
let buttonContainerClasses = "d-inline-flex align-items-end z-1";

export default function TodoList({ todoList }) {
    return (
        <CListGroup>
            {todoList.map((todo) => (
                <TodoItem 
                    key={todo.id} 
                    {...todo} 
                />
            ))}
        </CListGroup>
    )
}

function TodoItem({ id, text, state }) {
    return (
        <StyledCListGroupItem>
            <div className={labelContainerClasses}>
                {/* an id is necessary for CFormCheck to be clickable */}
                <CFormCheck
                    hitArea="full"
                    className="d-inline"
                    label={text}
                    id={'input-label-' + id}
                    defaultChecked={state==='done'}
                />
            </div>
            <div className={buttonContainerClasses}>
                <CButton className="me-1 rounded-pill" color="dark">Edit</CButton>
                <CButton className="rounded-pill" color="dark">Cancel</CButton>
            </div>
        </StyledCListGroupItem>
    )
}