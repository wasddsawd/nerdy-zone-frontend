import React from "react";
import styles from "../../styles/login.module.css";

export function Input_pra_login({id_name, type, placeholder, value, onChange }) {
  return (
    <input
      className={styles.input}
      id={id_name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
