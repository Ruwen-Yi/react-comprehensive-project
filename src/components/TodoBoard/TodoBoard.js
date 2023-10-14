import styled from "styled-components"
import TodoList from "./TodoList.js"

const StyledTodoBoard = styled.div`
    width: 40vw;
    height: 80vh;
    padding-top: 5vh;
    margin-top: 5vh;
    box-shadow: 0px 0px 10px 5px #5e594f;
    background-color: white;

    font-size: 30px;

    display: flex;
    justify-content: center;
`
export default function TodoBoard() {
    return(
        <StyledTodoBoard>
            <TodoList />
        </StyledTodoBoard>
    )
}