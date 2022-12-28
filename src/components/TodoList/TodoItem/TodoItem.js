import React from "react";
import styles from "./TodoItem.module.css";
import cn from "classnames";

const TodoItem = ({ task, status }) => {
  const indicatorStyles = cn(styles.indicator, {
    [styles.indicator_done]: status,
  });
  const taskStyles = cn(styles.task, {
    [styles.task_done]: status,
  });

  return (
    <div className={styles.container}>
      <div className={indicatorStyles}></div>
      <span className={taskStyles}>{task}</span>
    </div>
  );
};

export default TodoItem;
