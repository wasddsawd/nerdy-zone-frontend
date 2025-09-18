import { useState } from "react";
import styles from "../styles/eventos.module.css"

export default function Eventos() {
  return(
    <div className={styles.container_principal}>
      <div className={styles.container_esquerda}>
        <div className={styles.check_la}>
        <div className={styles.check}>
          <input type="checkbox" />
          <p>Anime</p>
        </div>
        <div className={styles.check}>
          <input type="checkbox" />
          <p>Games</p>
        </div>
        <div className={styles.check}>
          <input type="checkbox" />
          <p>HQs</p>
        </div>
        <div className={styles.check}>
          <input type="checkbox" />
          <p>Cosplay</p>
        </div>
        <div className={styles.check}>
          <input type="checkbox" />
          <p>RPG</p>
        </div>
        <div className={styles.check}>
          <input type="checkbox" />
          <p>Tech</p>
        </div>
        </div>
      </div>
    </div>
  )
}

