/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

import TodoList from '../../components/TodoBoard/TodoList';

describe('TodoList component', () => {
    const todoList = [
        {"id":0, "text":"todo 0", "state":"undo"},
        {"id":1, "text":"todo 1", "state":"undo"},
        {"id":2, "text":"todo 2", "state":"undo"}
    ];

    test('should toggle checkbox if the label was clicked', async () => { 
        const user = userEvent.setup();

        render(<TodoList 
            todoList={todoList}
            selectedMember={0}
            onTodoChange={jest.fn()}
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
    });

    test('should toggle save/edit button if the button was clicked', async () => { 
        const user = userEvent.setup();

        render(<TodoList 
            todoList={todoList}
            selectedMember={0}
            onTodoChange={jest.fn()}
        />)

        const editBtnElement = screen.getAllByText('Edit')[0];

        // clicking the edit button, the button should switch to a save button 
        await user.click(editBtnElement);
        expect(editBtnElement.textContent).toBe('Save');

        // clicking the button again, the button should switch to a edit button
        await user.click(editBtnElement);
        expect(editBtnElement.textContent).toBe('Edit');
    });

    test('should switch between a label and an input element if toggle the save/edit button', async () => { 
        const user = userEvent.setup();

        render(<TodoList 
            todoList={todoList}
            selectedMember={0}
            onTodoChange={jest.fn()}
        />)

        const editBtnElement = screen.getAllByText('Edit')[0];

        // clicking the button, the todo content should be a input tag 
        await user.click(editBtnElement);
        const todoContentInput = screen.getByDisplayValue('todo 0')
        expect(todoContentInput.tagName).toBe('INPUT');
        expect(todoContentInput.type).toBe('text');

        // clicking the button again, the todo content should be a label
        await user.click(editBtnElement);
        const todoContentLabel = screen.getByText('todo 0')
        expect(todoContentLabel.tagName).toBe('LABEL');
    });
})