import React from "react";
import styles from "./TodoHeader.module.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const TodoHeader = () => {
  return (
    <header className={styles.todoHeader}>
      <button type="button" className={styles.previousButton}>
        {<MdChevronLeft color="52504B" size="0.999rem" />}
      </button>
      <div className={styles.dateContainer}>
        <h2 className={styles.dateDay}>Segunda-Feira</h2>
        <span>11/05/2023</span>
      </div>
      <button type="button" className={styles.nextButton}>
        {<MdChevronRight color="52504B" size="0.999rem" />}
      </button>
    </header>
  );
};

export default TodoHeader;
