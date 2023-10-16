import { useState } from "react";

import styles from "./css/App.module.css";      // implement scoped style by css-modules
import "./css/global.css";
import MemberBoard from "./components/MemberBoard/MemberBoard.js";
import TodoBoard from "./components/TodoBoard/TodoBoard.js";
import data from "./data/data.js";


export default function App() {
    const [selectedMember, setSelectedMember] = useState(1);
    const memberList = data.map(member => {
        return {
            id: member.id,
            name: `${member.fstName} ${member.lstName}`
        }
    })
    const todoList = data.find((item) => item.id===selectedMember).list;
    
    return (
        <div className={styles.container}>
            <MemberBoard 
                memberList={memberList} 
                selectedMember={selectedMember}
            />
            <TodoBoard 
                todoList={todoList}
            />
        </div>
    );
}
