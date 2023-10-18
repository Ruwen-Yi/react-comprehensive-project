import { useState } from "react";

import styles from "./css/App.module.css";      // implement scoped style by css-modules
import "./css/global.css";
import MemberBoard from "./components/MemberBoard/MemberBoard.js";
import TodoBoard from "./components/TodoBoard/TodoBoard.js";
import data from "./data/data.js";


export default function App() {
    // state: the id of the selected member
    const [selectedMember, setSelectedMember] = useState(0);

    // the todo list of the selected member
    const todoList = data.find((member) => member.id === selectedMember).list;
    
    // the list of all members with their id and name
    const memberList = data.map(member => {
        return {
            id: member.id,
            name: `${member.fstName} ${member.lstName}`
        }
    })

    /**
     * set the selectedMember state to the id of the selected Member
     * @param {Event} e 
     */
    function handleMemberChange(e) {
        const nextId = +e.target.value;     // convert a string to a number
        setSelectedMember(nextId);
    }

    return (
        <div className={styles.container}>
            <MemberBoard 
                memberList={memberList} 
                selectedMember={selectedMember}
                onMemberChange={handleMemberChange}
            />
            <TodoBoard 
                todoList={todoList}
            />
        </div>
    );
}
