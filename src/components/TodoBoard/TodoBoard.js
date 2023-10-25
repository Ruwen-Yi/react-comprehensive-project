import styled from 'styled-components';
import TodoList from './TodoList.js';

const StyledTodoBoard = styled.div`
    width: 100%;
    height: auto;
    padding: 5vh 0;
    margin-top: 3vh;
    border-radius: 2%;
    box-shadow: 0px 0px 10px 5px #5e594f;

    font-size: 30px;

    display: flex;
    justify-content: center;
`
export default function TodoBoard(props) {
    return(
        <>
        <StyledTodoBoard>
            <TodoList {...props}/>
        </StyledTodoBoard>
        </>
    )
}