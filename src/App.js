import "./css/global.css";
import styles from "./css/App.module.css";      // implement scoped style by css-modules

import MemberList from "./MemberList.js";
import TodoList from "./TodoList.js";

export default function App() {
  return (
    <div className={styles.container}>
      <MemberList />
      <TodoList />
    </div>
  );
}
