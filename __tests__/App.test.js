/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

import App from '../src/App.js';

describe('App component', () => {
    test('should delete a todo item if its delete button was clicked', async () => { 
        const user = userEvent.setup();

        render(<App />)

        const deleteBtnElement = screen.getAllByText('Delete')[0];

        // clicking the delete button, the todo item should be removed 
        await user.click(deleteBtnElement);

        const deletedTodoItemElement = screen.queryByText('purchases a wand');
        expect(deletedTodoItemElement).toBeNull();
    });
})