import { CListGroup, CListGroupItem } from '@coreui/react';
import styled from "styled-components";

import TodoItem from './TodoItem.js';

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

export default function TodoList({ todoList }) {
    return (
        <CListGroup>
            {todoList.map((todo) => (
                <StyledCListGroupItem key={todo.id}>
                    <TodoItem {...todo} />
                </StyledCListGroupItem>
            ))}
        </CListGroup>
    )
}