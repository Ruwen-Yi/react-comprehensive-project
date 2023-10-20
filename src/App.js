import { useEffect, useState } from 'react';

import styles from './css/App.module.css';

import MemberBoard from './components/MemberBoard/MemberBoard.js';
import TodoBoard from './components/TodoBoard/TodoBoard.js';
import data from './data/data.js';

export default function App() {
    // react state - control the id of the selected member
    const [selectedMember, setSelectedMember] = useState(0);

    // react state - control the todo list of the selected member
    const [todoList, setTodoList] = useState(data.find((member) => member.id === selectedMember).list);

    // save the latest todo list before switching to a new member
    // so that changes on previous member's todo list can be saved
    useEffect(() => {
        return () => {
            data.find((member) => member.id === selectedMember).list = todoList;
        }
    },[todoList]);
    
    // the list of all members with their id and name
    const memberList = data.map(member => {
        return {
            id: member.id,
            name: `${member.fstName} ${member.lstName}`
        }
    });

    /**
     * set the selectedMember state to the id of the selected member
     * also set the todoList state to the todo list of that member
     * @param {Event} e 
     */
    function onMemberChange(e) {
        // convert the string value to a number
        const nextId = +e.target.value;     
        
        setSelectedMember(nextId);
        setTodoList(data.find((member) => member.id === nextId).list);
    }

    /**
     * replace the old todo item with the new one
     * this function is fired when the text or state of a todo item changed
     * @typedef {Object} newTodo
     * @property {number} id the id of the todo item
     * @property {string} text the content of the todo item
     * @property {string} state the state of the todo item, either 'done' or 'undo'
     */
    function onTodoChange(newTodo) {
        const newTodoList = todoList.map((todo) => (
            todo.id === newTodo.id ? newTodo : todo
        ));
        setTodoList(newTodoList);
    }

    /**
     * delete a todo item with its id
     * @param {number} deletedTodoId 
     */
    function onTodoDelete(deletedTodoId) {
        const newTodoList = todoList.filter((todo) => (
            todo.id !== deletedTodoId
        ));
        setTodoList(newTodoList);
    }

    return (
        <div className={styles.container}>
            <MemberBoard 
                memberList={memberList} 
                selectedMember={selectedMember}
                onMemberChange={onMemberChange}
            />
            <TodoBoard 
                key={selectedMember}
                todoList={todoList}
                selectedMember={selectedMember}
                onTodoChange={onTodoChange}
            />
        </div>
    );
}
