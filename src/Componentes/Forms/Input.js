import React from "react";
import styles from "./Input.module.css";
import { FaPlus } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";
import { AiOutlineEnter } from "react-icons/ai";

const Input = () => {
  return (
    <div className={styles.inputContainer}>
      <FaPlus className={styles.plusIcon} size="0.999rem" />
      <input
        type="text"
        placeholder="Criar uma nova tarefa..."
        className={styles.input}
        spellCheck="false"
        autoComplete="false"
      />
      <button type="button" className={styles.calendarButton}>
        <BsCalendarEvent
          className={styles.calendarIcon}
          size="1.625rem"
          color="9B988E"
        />
      </button>
      <span className={styles.enterTip}>Enter {<AiOutlineEnter />}</span>
    </div>
  );
};

export default Input;
