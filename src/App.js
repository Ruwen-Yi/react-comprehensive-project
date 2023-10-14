import "./css/global.css";
import styles from "./css/App.module.css";      // implement scoped style by css-modules

import MemberBoard from "./components/MemberBoard/MemberBoard.js";
import TodoList from "./components/TodoBoard/TodoList.js";

export default function App() {
  return (
    <div className={styles.container}>
      <MemberBoard />
      <TodoList />
    </div>
  );
}
