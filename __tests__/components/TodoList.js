/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

import TodoList from "../../src/components/TodoBoard/TodoList.js";

describe('TodoList component', () => {
    const todoList = [
        {"id":0, "text":"todo 0", "state":"undo"},
        {"id":1, "text":"todo 1", "state":"undo"},
        {"id":2, "text":"todo 2", "state":"undo"}
    ]

    test('should toggle checkbox if the label was clicked', async () => { 
        const user = userEvent.setup();

        render(<TodoList 
            todoList={todoList}
            selectedMember={0}
        />)

        const todoItemLabelElement = screen.getByText("todo 1");
        const todoItemCheckboxElement = screen.getByLabelText("todo 1");

        // initially, the checkbox is unchecked 
        expect(todoItemCheckboxElement).not.toBeChecked();

        // clicking the label again, the checkbox should be unchecked 
        await user.click(todoItemLabelElement);
        expect(todoItemCheckboxElement).toBeChecked();

        // clicking the label again, the checkbox should be unchecked
        await user.click(todoItemLabelElement);
        expect(todoItemCheckboxElement).not.toBeChecked();
     })
})