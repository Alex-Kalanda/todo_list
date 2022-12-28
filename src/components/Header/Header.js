import React from "react";
import styles from "./Header.module.css";

const HEADER_TITLE = "Дневной список дел";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.caption}>{HEADER_TITLE}</h1>
    </header>
  );
};

export default Header;
