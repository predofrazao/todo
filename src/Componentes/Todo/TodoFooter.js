import React from "react";
import styles from "./TodoFooter.module.css";

const TodoFooter = () => {
  return (
    <footer className={styles.todoFooter}>
      <span className={styles.remainingTasks}>4 tarefas restantes</span>
      <ul className={styles.statusButtonList}>
        <li>
          <button type="button" className={styles.statusButton}>
            Ativas
          </button>
        </li>
        <li>
          <button type="button" className={styles.statusButton}>
            Concluídas
          </button>
        </li>
        <li>
          <button type="button" className={styles.statusButton}>
            Todas
          </button>
        </li>
      </ul>
      <button type="button" className={styles.clearButton}>
        Limpar
      </button>
    </footer>
  );
};

export default TodoFooter;
