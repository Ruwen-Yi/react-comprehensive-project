/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

import App from '../src/App.js';

describe('App component', () => {
    test('should toggle member if ')

    test('should delete a todo item if its delete button was clicked', async () => { 
        const user = userEvent.setup();

        render(<App />)

        const deleteBtnElement = screen.getAllByText('Delete')[0];

        // before deletion, the todo item should be on the screen
        const todoItemElement = screen.queryByText('todo 0');
        expect(todoItemElement).toBeInTheDocument();

        // clicking the delete button, the todo item should be removed 
        await user.click(deleteBtnElement);

        const deletedTodoItemElement = screen.queryByText('todo 0');
        expect(deletedTodoItemElement).toBeNull();
    });
})