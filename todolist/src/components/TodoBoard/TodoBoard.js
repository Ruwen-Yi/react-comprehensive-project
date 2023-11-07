import styled from 'styled-components';

import TodoList from './TodoList.js';

const StyledTodoBoard = styled.div`
    width: 100%;
    height: auto;
    padding: 1rem 0.5rem;
    margin-top: 2rem;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px #5e594f;

    font-size: 30px;

    display: flex;
    justify-content: center;
`
export default function TodoBoard(props) {
    return(
        <StyledTodoBoard>
            <TodoList {...props}/>
        </StyledTodoBoard>
    )
}