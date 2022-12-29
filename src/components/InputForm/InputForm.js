import React, { useState } from 'react';
import styles from './InputForm.module.css';

const INPUT_PLACEHOLDER = 'Добавить новый элемент';
const BUTTON_TITLE = 'Добавить';
const MIN_TASK_LETTERS = 3;

const InputForm = ({ addTask }) => {
  const [tempInput, setTempInput] = useState('');

  const handleOnChange = (event) => {
    setTempInput(event.target.value);
  };

  const handleAddTask = () => {
    if (tempInput.length >= MIN_TASK_LETTERS) {
      addTask(tempInput);
      setTempInput('');
    }
  };

  return (
    <div className={styles.container}>
      <input
        value={tempInput}
        type="text"
        onChange={handleOnChange}
        placeholder={INPUT_PLACEHOLDER}
        className={styles.input}
      />
      <button onClick={handleAddTask} className={styles.button}>
        {BUTTON_TITLE}
      </button>
    </div>
  );
};

export default InputForm;
