import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick = () => {}, type = "button" }) => {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
