import React from "react";
import styles from "./TodoBody.module.css";

const TodoBody = () => {
  return (
    <main className={styles.todoMain}>
      <ul className={styles.tasksList}>
        <li>
          <button type="button" className={styles.taskButton}>
            <input type="checkbox" className={styles.taskCheck} id="task" />
            <label htmlFor="task">Finalizar a tela de vendedor entrada</label>
          </button>
        </li>
      </ul>
    </main>
  );
};

export default TodoBody;
