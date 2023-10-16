import { useState } from "react";

import styles from "./css/App.module.css";      // implement scoped style by css-modules
import "./css/global.css";
import MemberBoard from "./components/MemberBoard/MemberBoard.js";
import TodoBoard from "./components/TodoBoard/TodoBoard.js";
import data from "./data/data.js";


export default function App() {
    let memberList = data.map(member => {
        return {
            id: member.id,
            name: `${member.fstName} ${member.lstName}`
        }
    })

    const [selectedMember, setSelectedMember] = useState(0);

    return (
        <div className={styles.container}>
            <MemberBoard 
                memberList={memberList} 
                selectedMember={selectedMember}
            />
            <TodoBoard />
        </div>
    );
}
