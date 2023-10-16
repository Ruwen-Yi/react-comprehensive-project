import styles from "./css/App.module.css";      // implement scoped style by css-modules


import "./css/global.css";
import MemberBoard from "./components/MemberBoard/MemberBoard.js";
import TodoBoard from "./components/TodoBoard/TodoBoard.js";

export default function App() {
  return (
    <div className={styles.container}>
      <MemberBoard />
      <TodoBoard />
    </div>
  );
}
