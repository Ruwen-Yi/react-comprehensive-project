import { useEffect, useState } from 'react';

import styles from './css/App.module.css';      // implement scoped style by css-modules

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
        const nextId = +e.target.value;     // convert the string value to a number
        setSelectedMember(nextId);
        setTodoList(data.find((member) => member.id === nextId).list);
    }

    /**
     * update the todo list with the new todo item
     * this function is fired when the text or state of a todo item changed
     * @param {Object} newTodo 
     */
    function onTodoChange(newTodo) {
        // console.log(newTodo);
        const newTodoId = newTodo.id;
        const newTodoList = todoList.map((todo) => (
            todo.id === newTodoId ? newTodo : todo
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
