import React from 'react';
import styles from './TodoItem.module.css';
import cn from 'classnames';
import indicatorIcon from '../../../assets/svg/done-icon.svg';

const TodoItem = ({ task, status }) => {
  const indicatorStyles = cn(styles.indicator, {
    [styles.indicator_done]: status,
  });
  const taskStyles = cn(styles.task, {
    [styles.task_done]: status,
  });

  return (
    <div className={styles.container}>
      <div className={indicatorStyles}>{status && <img src={indicatorIcon} alt="done icon" />}</div>
      <span className={taskStyles}>{task}</span>
    </div>
  );
};

export default TodoItem;
