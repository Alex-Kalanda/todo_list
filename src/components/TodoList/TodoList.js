import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from './TodoItem/TodoItem';

const TodoList = ({ tasks, onChangeStatus }) => {
  return (
    <div className={styles.container}>
      {tasks.map((task) => (
        <TodoItem key={task.id} {...task} onChangeStatus={onChangeStatus} />
      ))}
    </div>
  );
};

export default TodoList;
