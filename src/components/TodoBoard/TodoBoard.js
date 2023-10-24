import styled from 'styled-components';
import TodoList from './TodoList.js';

const StyledTodoBoard = styled.div`
    width: 40vw;
    height: 80vh;
    padding-top: 5vh;
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