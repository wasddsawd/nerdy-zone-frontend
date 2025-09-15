import * as React from "react";
import "../../styles/Geral.css";
import styles from "../../styles/navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className={styles.fora}>
      <div className={styles.dentro}>
        <Link to="/" className="">Home</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/login">Login</Link>
        <Link to="/paginaEventos">Eventos</Link>
      </div>
    </nav>
  );
}
