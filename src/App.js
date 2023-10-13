import "./css/global.css";
import styles from "./css/App.module.css";      // implement scoped style by css-modules

import MemberBoard from "./component/MemberBoard.js";
import TodoList from "./TodoList.js";

export default function App() {
  return (
    <div className={styles.container}>
      <MemberBoard />
      <TodoList />
    </div>
  );
}
