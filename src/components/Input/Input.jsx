import React, { useState } from "react";
import styles from "./Input.module.css";

const Input = ({ type, id, name, onChange, label }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}>{label || name}</label>
      <input
        className={styles.input}
        onChange={onChange}
        type={type}
        id={id || name}
        name={name}
      />
    </div>
  );
};

export default Input;
