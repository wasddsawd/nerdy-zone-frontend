import React, { Children } from "react";
import styles from "../../styles/login.module.css";


export function Button_pra_login({children, onClick}) {
  return(
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
);};