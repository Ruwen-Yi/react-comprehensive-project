/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import MemberBoard from '../../src/components/MemberBoard/MemberBoard.js';

describe('MemberBoard component', () => {
    test('renders members selection list', () => {
        const memberList = [
            {id:0, name:'Jhon Smith'},
            {id:1, name:'Marry Smith'}
        ]
        render(<MemberBoard memberList={memberList} selectedMember={0}/>);

        const membersSelectionElement = screen.queryByRole('combobox'); 
        expect(membersSelectionElement).not.toBeNull();
    })
})

