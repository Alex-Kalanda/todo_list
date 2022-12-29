import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from './TodoItem/TodoItem';

const TodoList = ({ tasks }) => {
  return (
    <div className={styles.container}>
      {tasks.map((task, idx) => (
        <TodoItem key={idx} {...task} />
      ))}
    </div>
  );
};

export default TodoList;
