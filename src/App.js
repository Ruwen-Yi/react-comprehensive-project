import styles from "./css/App.module.css";      // implement scoped style by css-modules
import data from "./data/data.js";

import "./css/global.css";
import MemberBoard from "./components/MemberBoard/MemberBoard.js";
import TodoBoard from "./components/TodoBoard/TodoBoard.js";

let members = data.map(member => {
    return `${member.fstName} ${member.lstName}`
})

export default function App() {
    
    return (
        <div className={styles.container}>
        <MemberBoard members={members}/>
        <TodoBoard />
        </div>
    );
}
