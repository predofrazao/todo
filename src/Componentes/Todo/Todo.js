import React from "react";
import styles from "./Todo.module.css";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
import TodoBody from "./TodoBody";

const Todo = () => {
  return (
    <section className={styles.todoSection}>
      <TodoHeader />
      <TodoBody />
      <TodoFooter />
    </section>
  );
};

export default Todo;
