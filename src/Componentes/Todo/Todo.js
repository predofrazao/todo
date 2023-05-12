import React from "react";
import styles from "./Todo.module.css";
import TodoHeader from "./TodoHeader";

const Todo = () => {
  return (
    <section className={styles.todoSection}>
      <TodoHeader />
    </section>
  );
};

export default Todo;
