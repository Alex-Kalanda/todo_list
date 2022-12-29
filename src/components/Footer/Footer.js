import React from 'react';
import styles from './Footer.module.css';

const CLEAN_BUTTON_TITLE = 'Очистить';
const AmountDoneTask = {
  separatorSymbol: '/',
  titleOne: 'дело завершено',
  titleFew: 'дела завершено',
  titleMulti: 'дел завершено',
};

const Footer = ({ tasks, onClick }) => {
  const getCorrectTitle = (numOfTasks) => {
    if (numOfTasks === 1) return AmountDoneTask.titleOne;
    if (numOfTasks > 1 && numOfTasks < 5) return AmountDoneTask.titleFew;
    return AmountDoneTask.titleMulti;
  };

  const getAmountTaskTitle = () => {
    const amountDoneTask = tasks.filter((t) => t.status === true).length;
    return amountDoneTask + AmountDoneTask.separatorSymbol + tasks.length + ' ' + getCorrectTitle(amountDoneTask);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.amount}>{Array.isArray(tasks) && getAmountTaskTitle()}</div>
      <button className={styles.cleanButton} onClick={onClick}>
        {CLEAN_BUTTON_TITLE}
      </button>
    </footer>
  );
};

export default Footer;
