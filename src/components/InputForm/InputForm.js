import React from 'react';
import styles from './InputForm.module.css';

const INPUT_PLACEHOLDER = 'Добавить новый элемент';
const BUTTON_TITLE = 'Добавить';

const InputForm = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder={INPUT_PLACEHOLDER} className={styles.input} />
      <button onClick={onClick} className={styles.button}>
        {BUTTON_TITLE}
      </button>
    </div>
  );
};

export default InputForm;
