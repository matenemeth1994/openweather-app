import React from "react";
import styles from "./Header.module.scss"

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;
