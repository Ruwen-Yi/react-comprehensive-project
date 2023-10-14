import styled from "styled-components"
import TodoList from "./TodoList.js"

const StyledTodoBoard = styled.div`
    background-color: white;
`
export default function TodoBoard() {
    return(
        <StyledTodoBoard>
            <TodoList />
        </StyledTodoBoard>
    )
}